const toggleSidebar = () => {
  const sidebar = document.querySelector('.sidebar_showing');
  const previewBtn = document.querySelector('.open_preview');
  const sidebarBtn = document.querySelector('.open_sidebar');

  sidebar.classList.toggle('hideElem');

  if (!sidebar.classList.contains('hideElem')) {
    previewBtn.classList.toggle('hideElem');
    sidebarBtn.textContent = '<';
  } else {
    previewBtn.classList.toggle('hideElem');
    sidebarBtn.textContent = '>';
  }

}

export default toggleSidebar;