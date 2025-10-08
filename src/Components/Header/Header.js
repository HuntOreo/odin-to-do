import { Button, Elem, Head } from 'elekit';
import toggleSidebar from '../../Helpers/events/toggleSidebar';

const Header = function () {
  const header = new Elem({
    tag: 'header'
  }, { background: 'lightgreen' });

  const toggleSideBtn = new Button('Toggle Sidebar');
  toggleSideBtn.addListener('click', toggleSidebar);
  const logo = new Head('LOGO');

  header.append([toggleSideBtn, logo]);
  return header;
}

export default Header;