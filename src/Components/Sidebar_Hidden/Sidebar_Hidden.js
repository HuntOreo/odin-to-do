import { Button, Container } from 'elekit';
import renderPreview from '../../Helpers/events/renderPreview';

const Sidebar_Hidden = (taskList) => {
  const container = new Container({selectors: ['sidebar_hidden', 'hideElem']}, { background: 'skyblue' });
  const openPreview = new Button({
    content: '+',
    selectors: 'open_preview',
  });
  const openSidebar = new Button({
    content: '>',
    selectors: 'open_sidebar'
  });

  openPreview.addListener('click', (e) => {
    renderPreview(undefined, taskList)
    toggleTaskCreator(e);
  })
  container.append([openPreview, openSidebar]);
  return container;
}

export default Sidebar_Hidden;