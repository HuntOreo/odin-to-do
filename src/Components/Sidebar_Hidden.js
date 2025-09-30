import { Button, Container } from 'elekit';

const Sidebar_Hidden = () => {
  const container = new Container('sidebar_hidden', { background: 'skyblue' });
  const openPreview = new Button({
    content: '',
    selectors: 'open_preview',
  });
  const openSidebar = new Button({
    content: '',
    selectors: 'open_sidebar'
  });

  container.append([openPreview, openSidebar]);
  return container;
}

export default Sidebar_Hidden;