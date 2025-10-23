import { Button, Container } from 'elekit';
import renderPreview from '../../Helpers/events/renderPreview';
import toggleSidebar from '../../Helpers/events/toggleSidebar';
import toggleTaskCreator from '../../Helpers/events/toggleTaskCreator';

const Sidebar_Hidden = (taskList) => {
  const container = new Container({ selectors: ['sidebar_hidden'] });
  const openPreview = new Button({
    content: '+',
    selectors: 'open_preview',
  });
  const openSidebar = new Button({
    content: '>',
    selectors: 'open_sidebar'
  });

  openSidebar.addListener('click', (e) => {
    toggleSidebar();
  })

  openPreview.addListener('click', (e) => {
    renderPreview(undefined, taskList)
  })
  container.append([openSidebar, openPreview]);
  return container;
}

export default Sidebar_Hidden;