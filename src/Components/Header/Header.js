import { Button, Elem, Head } from 'elekit';

const Header = function () {
  const header = new Elem({
    tag: 'header'
  }, { background: 'lightgreen' });

  const toggleSidebar = new Button('Toggle Sidebar');
  const logo = new Head('LOGO');

  header.append([toggleSidebar, logo]);
  return header;
}

export default Header;