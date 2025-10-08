const toggleSidebar = () => {
  const app = document.querySelector('.app');
  const hiddenSide = document.querySelector('.sidebar_hidden');
  const showingSide = document.querySelector('.sidebar_showing');

  showingSide.classList.toggle('hideElem');
  hiddenSide.classList.toggle('hideElem');
  app.classList.toggle('hideSidebar');
}

export default toggleSidebar;