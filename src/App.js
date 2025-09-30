import { Container } from 'elekit';
import Task from './Task_Class';
import Header from './Components/Header';
import Sidebar_Hidden from './Components/Sidebar_Hidden';
import Sidebar_Showing from './Components/Sidebar_Showing';

const tasks = [
  new Task({
    content: 'My Task',
    date: {
      day: 12,
      month: 0o2,
      year: 2025,
    },
  })
];

const App = function () {
  const app = new Container({ selectors: 'app' });
  app.addClass('showSidebar');

  app.append([Header(), Sidebar_Hidden(), Sidebar_Showing(tasks)]);

  return app;
}

export default App;