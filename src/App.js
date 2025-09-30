import { Container } from 'elekit';
import Header from './Components/Header';

const tasks = [];

const App = function () {
  const app = new Container({ selectors: 'app' });

  app.addClass('showSidebar');

  app.append(Header());

  return app;
}

export default App;