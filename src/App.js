import { Container } from 'elekit';
import Header from './Components/Header';
import Sidebar_Hidden from './Components/Sidebar_Hidden';

const tasks = [];

const App = function () {
  const app = new Container({ selectors: 'app' });
  app.addClass('showSidebar');

  app.append([Header(), Sidebar_Hidden()]);

  return app;
}

export default App;