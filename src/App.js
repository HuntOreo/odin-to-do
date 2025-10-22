import { Container } from 'elekit';
import Header from './Components/Header/Header';
import Sidebar_Hidden from './Components/Sidebar_Hidden/Sidebar_Hidden';
import Sidebar_Showing from './Components/Sidebar_Showing/Sidebar_Showing';
import Preview from './Components/Preview/Preview';
import Content from './Components/Content/Content';
import handleCookies from './Helpers/handleCookies';

let taskList = [];


handleCookies(taskList) // grab cookies, populate list.

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