import { Button, Container } from 'elekit';
import toggleTaskEditor from '../../Helpers/events/toggleTaskEditor';

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

  openPreview.addListener('click', () => toggleTaskEditor(undefined, taskList))
  container.append([openPreview, openSidebar]);
  return container;
}

export default Sidebar_Hidden;