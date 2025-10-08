const toggleSidebar = () => {
  const app = document.querySelector('.app');
  const hiddenSide = document.querySelector('.sidebar_hidden');
  const showingSide = document.querySelector('.sidebar_showing');

  showingSide.classList.toggle('hideElem');
  hiddenSide.classList.toggle('hideElem');

  if (
    app.classList.contains('sidebar_taskCreator') ||
    app.classList.contains('showTaskCreator')) {
      app.classList.toggle('sidebar_taskCreator');
      app.classList.toggle('showTaskCreator');
  }

  app.classList.toggle('hideSidebar');
}

export default toggleSidebar;