import { Container } from 'elekit';

const App = function () {
  const app = new Container({ selectors: 'app' }, {
    display: 'grid',
    height: '100%'
  });

  app.addClass('showSidebar');

  return app;
}

export default App;