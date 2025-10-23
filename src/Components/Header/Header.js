import { Button, Elem, Head } from 'elekit';
import toggleSidebar from '../../Helpers/events/toggleSidebar';

const Header = function () {
  const header = new Elem({
    tag: 'header'
  }, { background: 'lightgreen' });

  const logo = new Head('LOGO');

  header.append(logo);
  return header;
}

export default Header;