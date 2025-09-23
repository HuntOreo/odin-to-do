import { Container } from 'elekit';

const Nav = function () {
  const container = new Container({ selectors: 'header' }, {
    background: 'lightgreen',
  });

  return container;
}

export default Nav;