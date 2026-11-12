// All content and project links remain available without JavaScript.
const filterBar = document.querySelector('.filter-bar');
if (filterBar) {
  const buttons = [...filterBar.querySelectorAll('[data-filter]')];
  const projects = [...document.querySelectorAll('[data-categories]')];
  const count = document.querySelector('#project-count');
  const grid = document.querySelector('.project-grid');
  const list = document.querySelector('.project-list');
  function applyFilter(filter) {
    let visible = 0;
    for (const project of projects) {
      const matches = filter === 'all' || project.dataset.categories.split(' ').includes(filter);
      project.hidden = !matches;
      if (matches) visible += 1;
    }
    for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
    grid.hidden = ![...grid.children].some(project => !project.hidden);
    list.hidden = ![...list.children].some(project => !project.hidden);
    list.style.marginTop = grid.hidden ? '0' : '';
    count.textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}`;
  }
  filterBar.hidden = false;
  for (const button of buttons) button.addEventListener('click', () => applyFilter(button.dataset.filter));
}
