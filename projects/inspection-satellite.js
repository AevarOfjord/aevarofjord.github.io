const explorer = document.querySelector('[data-actuation-explorer]');

if (explorer) {
  const controls = explorer.querySelector('.actuation-controls');
  const buttons = [...controls.querySelectorAll('[data-actuation-mode]')];
  const notes = [...explorer.querySelectorAll('[data-actuation-note]')];

  controls.hidden = false;
  for (const button of buttons) {
    button.addEventListener('click', () => {
      const mode = button.dataset.actuationMode;
      explorer.dataset.mode = mode;
      for (const option of buttons) {
        option.setAttribute('aria-pressed', String(option === button));
      }
      for (const note of notes) {
        note.hidden = note.dataset.actuationNote !== mode;
      }
    });
  }
}
