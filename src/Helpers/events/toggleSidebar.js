import { updateAppState } from "../handleAppState";

const toggleSidebar = (appStateHolder) => {
  
  const sidebar = document.querySelector('.sidebar_showing');
  const previewBtn = document.querySelector('.open_preview');
  const sidebarBtn = document.querySelector('.open_sidebar');
  const isHidden = sidebar.classList.contains('hideElem');

  sidebar.classList.toggle('hideElem');
  
  if (!isHidden) {
    previewBtn.classList.toggle('hideElem');
    sidebarBtn.textContent = '>';
  } else {
    previewBtn.classList.toggle('hideElem');
    sidebarBtn.textContent = '<';
  }

  appStateHolder = updateAppState('mainSidebar', isHidden, appStateHolder);
  appStateHolder = updateAppState('quickSidebar', !isHidden, appStateHolder);
}

export default toggleSidebar;