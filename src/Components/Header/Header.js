import { Elem, Head } from 'elekit';

const Header = function () {
  const header = new Elem({
    tag: 'header'
  }, { background: 'lightgreen' });

  const logo = new Head('LOGO');

  header.append(logo);
  return header;
}

export default Header;