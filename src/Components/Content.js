import { Container } from 'elekit';

const Content = function () {
  const container = new Container({ selectors: 'content' }, {
    background: 'lightblue',
  });

  return container;
}

export default Content;