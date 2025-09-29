import { Container } from 'elekit';
import Sidebar from './Components/Sidebar';
import Nav from './Components/Nav';
import Content from './Components/Content';

var taskList = [];

const App = function () {
  const app = new Container({ selectors: 'app' }, {
    display: 'grid',
    height: '100%'
  });

  app.addClass('showSidebar');

  const elements = [Nav(), Sidebar(taskList), Content(taskList)]

  app.append(elements);
  return app;
}

export default App;