(() => {
  const viewer = document.querySelector('.figure-viewer');
  if (!viewer || typeof viewer.showModal !== 'function') return;

  const image = viewer.querySelector('img');
  const caption = viewer.querySelector('#figure-viewer-caption');
  const stage = viewer.querySelector('.figure-viewer-stage');
  const sizeButton = viewer.querySelector('[data-figure-size]');
  const closeButton = viewer.querySelector('[data-figure-close]');
  let sourceLink = null;

  function setSize(actual) {
    viewer.dataset.size = actual ? 'actual' : 'fit';
    sizeButton.setAttribute('aria-pressed', String(actual));
    sizeButton.textContent = actual ? 'Fit image' : 'Actual size';
    stage.scrollTo(0, 0);
  }

  function restoreReading() {
    document.documentElement.classList.remove('figure-viewer-open');
    sourceLink?.focus({ preventScroll: true });
  }

  function closeViewer() {
    viewer.close();
    restoreReading();
  }

  document.querySelectorAll('.chess-image').forEach(link => {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const original = link.querySelector('img');
      if (!original) return;
      event.preventDefault();
      sourceLink = link;
      image.src = link.href;
      image.alt = original.alt;
      caption.textContent = link.closest('figure')?.querySelector('figcaption')?.textContent || original.alt;
      setSize(false);
      viewer.showModal();
      document.documentElement.classList.add('figure-viewer-open');
      closeButton.focus();
    });
  });

  sizeButton.addEventListener('click', () => setSize(viewer.dataset.size !== 'actual'));
  closeButton.addEventListener('click', closeViewer);
  viewer.addEventListener('cancel', event => {
    event.preventDefault();
    closeViewer();
  });
  viewer.addEventListener('click', event => {
    if (event.target !== viewer) return;
    const bounds = viewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeViewer();
  });
  viewer.addEventListener('close', () => {
    if (!viewer.open) restoreReading();
  });
})();

(() => {
  const recording = document.querySelector('#simulator-recording');
  const toggle = document.querySelector('[data-recording-toggle]');
  const fallback = document.querySelector('[data-recording-fallback]');
  const status = document.querySelector('.recording-status');
  if (!recording || !toggle || !fallback || !status) return;

  const poster = recording.src;
  const animation = fallback.href;
  let playing = false;

  function stop() {
    playing = false;
    recording.src = poster;
    toggle.textContent = 'Play recording';
    toggle.setAttribute('aria-pressed', 'false');
    status.textContent = 'Recorded simulation';
  }

  toggle.hidden = false;
  fallback.hidden = true;
  toggle.addEventListener('click', () => {
    if (playing) {
      stop();
      return;
    }
    playing = true;
    recording.src = animation;
    toggle.textContent = 'Stop recording';
    toggle.setAttribute('aria-pressed', 'true');
    status.textContent = 'Loading recording…';
  });
  recording.addEventListener('load', () => {
    if (playing) status.textContent = 'Playing recorded simulation';
  });
  recording.addEventListener('error', () => {
    if (!playing) return;
    stop();
    status.textContent = 'Recording could not load. Open the original animation below.';
    fallback.hidden = false;
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && playing) stop();
  });
})();
