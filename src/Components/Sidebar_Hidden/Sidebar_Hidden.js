import { Button, Container } from 'elekit';

const Sidebar_Hidden = () => {
  const container = new Container({selectors: ['sidebar_hidden', 'hideElem']}, { background: 'skyblue' });
  const openPreview = new Button({
    content: '+',
    selectors: 'open_preview',
  });
  const openSidebar = new Button({
    content: '>',
    selectors: 'open_sidebar'
  });

  container.append([openPreview, openSidebar]);
  return container;
}

export default Sidebar_Hidden;