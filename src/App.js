import { Container } from 'elekit';
import Task from './Task_Class';
import Header from './Components/Header/Header';
import Sidebar_Hidden from './Components/Sidebar_Hidden/Sidebar_Hidden';
import Sidebar_Showing from './Components/Sidebar_Showing/Sidebar_Showing';
import Preview from './Components/Preview/Preview';
import Content from './Components/Content/Content';

let taskList = [];

const cookies = document.cookie.split('; ');
const userTasksExist = cookies.find(cookie => cookie.startsWith('userTasks='));
if (!userTasksExist) {
  taskList = [
    new Task({
      title: 'Task!',
      content: 'My Task',
      date: {
        day: undefined,
        month: undefined,
        year: 2025,
      },
    }),
    new Task({
      title: 'Task 2!',
      content: 'My other Task',
      date: {
        day: 12,
        month: '2',
        year: 2025,
      },
    }),
    new Task({
      title: 'IDK',
      content: 'My Task',
      date: {
        day: 2,
        month: '2',
        year: 2025,
      },
    }),
    new Task({
      title: 'Yippee',
      content: 'My Task',
      date: {
        day: 2,
        month: '12',
        year: 2025,
      },
    }),
  ]
  document.cookie = `userTasks=${JSON.stringify(taskList)}`
} else {
  const cookieName = 'userTasks=';
  const tasksString = userTasksExist.slice(cookieName.length);
  const tasksArr = JSON.parse(tasksString);
  taskList = [...tasksArr];
}


const App = function () {
  const app = new Container({ selectors: 'app' });
  console.log(taskList)
  app.append([
    Header(),
    Sidebar_Hidden(taskList),
    Sidebar_Showing(taskList),
    Preview(),
    Content(),
  ]);

  return app;
}

export default App;