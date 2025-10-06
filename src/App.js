import { Container } from 'elekit';
import Task from './Task_Class';
import Header from './Components/Header/Header';
import Sidebar_Hidden from './Components/Sidebar_Hidden/Sidebar_Hidden';
import Sidebar_Showing from './Components/Sidebar_Showing/Sidebar_Showing';
import Preview from './Components/Preview/Preview';
import Content from './Components/Content/Content';

const tasks = [
  new Task({
    title: 'Task!',
    content: 'My Task',
    date: {
      day: 12,
      month: '02',
      year: 2025,
    },
  }),
  new Task({
    content: 'My Task',
    date: {
      day: 2,
      month: '02',
      year: 2025,
    },
  }),
  new Task({
    content: 'My Task',
    date: {
      day: 2,
      month: '12',
      year: 2025,
    },
  }),

];

const App = function () {
  const app = new Container({ selectors: 'app' });

  app.append([
    Header(),
    Sidebar_Hidden(),
    Sidebar_Showing(tasks),
    Preview(tasks),
    Content(tasks),
  ]);

  return app;
}

export default App;