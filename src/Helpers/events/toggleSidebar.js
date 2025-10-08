const toggleSidebar = () => {
  const app = document.querySelector('.app');
  const hiddenSide = document.querySelector('.sidebar_hidden');
  const showingSide = document.querySelector('.sidebar_showing');

  showingSide.classList.toggle('hideElem');
  hiddenSide.classList.toggle('hideElem');
  
  if (
    app.classList.contains('showingSidebar_withEditor') ||
    app.classList.contains('hiddenSidebar_withEditor')) {
      app.classList.toggle('showingSidebar_withEditor');
      app.classList.toggle('hiddenSidebar_withEditor');
  } else {
    app.classList.toggle('hiddenSidebar_noEditor');
  }
}

export default toggleSidebar;