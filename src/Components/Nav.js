import { Button, Container, Head } from 'elekit';
import { toggleSide } from '../helpers/events';
 
const Nav = function () {
  const container = new Container({ selectors: 'header' }, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: 'lightgreen',
  });
  const logo = new Head({size: 1, content: 'ToDo'});
  const toggleSidebar = new Button('Toggle Sidebar');
  toggleSidebar.addListener('click', toggleSide);

  container.appendEl([ toggleSidebar, logo ]);
  return container;
}

export default Nav;