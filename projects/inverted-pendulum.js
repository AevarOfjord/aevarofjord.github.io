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

  document.querySelectorAll('.pendulum-image').forEach(link => {
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
  const data = document.querySelector('#pendulum-runs');
  const selector = document.querySelector('.run-selector');
  const image = document.querySelector('#run-image');
  const toggle = document.querySelector('#run-toggle');
  const status = document.querySelector('#recording-status');
  if (!data || !selector || !image || !toggle || !status) return;

  let runs;
  try { runs = JSON.parse(data.textContent); } catch { return; }
  let selected = runs.find(run => run.links === 3);
  if (!selected) return;
  let playing = false;
  const put = (id, text) => { document.getElementById(id).textContent = text; };

  function stop() {
    playing = false;
    image.src = selected.poster;
    toggle.textContent = 'Play simulation';
    toggle.setAttribute('aria-pressed', 'false');
    status.textContent = `Recorded simulation · ${selected.links} ${selected.links === 1 ? 'link' : 'links'}`;
  }

  function selectRun(links) {
    const run = runs.find(item => item.links === links);
    if (!run) return;
    selected = run;
    stop();
    selector.querySelectorAll('button').forEach(button => {
      button.setAttribute('aria-pressed', String(Number(button.dataset.run) === links));
    });
    put('run-title', `${links}-link simulation`);
    put('run-mode', run.mode);
    document.getElementById('run-mode').dataset.quality = String(run.misses > 0);
    image.alt = `${links}-link inverted pendulum simulation with cart position, force and solver timing telemetry`;
    document.getElementById('run-full-size').href = run.gif;
    put('run-convergence', run.convergence);
    put('run-interval', `${run.interval} ms`);
    put('run-horizon', `${run.horizon} steps · ${run.prediction}`);
    put('run-misses', String(run.misses));
    put('run-caption', run.misses === 0
      ? `Original ${links}-link recording. The controller reaches the balance region at ${run.convergence} and completes the subsequent hold with zero missed solver deadlines.`
      : `Original ${links}-link quality-study recording. Balance is reached at ${run.convergence}; ${run.misses} recorded solves exceed the ${run.interval} ms control interval.`);
  }

  selector.hidden = false;
  toggle.hidden = false;
  selector.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => selectRun(Number(button.dataset.run)));
  });
  toggle.addEventListener('click', () => {
    if (playing) { stop(); return; }
    playing = true;
    image.src = selected.gif;
    toggle.textContent = 'Stop simulation';
    toggle.setAttribute('aria-pressed', 'true');
    status.textContent = 'Loading recording…';
  });
  image.addEventListener('load', () => {
    if (playing) status.textContent = `Playing recorded simulation · ${selected.links} ${selected.links === 1 ? 'link' : 'links'}`;
  });
  image.addEventListener('error', () => {
    if (!playing) return;
    stop();
    status.textContent = 'Recording could not load. Use the full-size animation link.';
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && playing) stop();
  });
})();
