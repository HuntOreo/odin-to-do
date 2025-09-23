import { Container } from 'elekit';

const Sidebar = function () {
  const container = new Container({ selectors: 'sidebar' }, {
    background: 'lightcoral',
  });

  return container;
}

export default Sidebar;