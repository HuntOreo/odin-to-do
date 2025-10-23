import { Container, Elem } from 'elekit';
import Header from './Components/Header/Header';
import Sidebar_Hidden from './Components/Sidebar_Hidden/Sidebar_Hidden';
import Sidebar_Showing from './Components/Sidebar_Showing/Sidebar_Showing';
import Preview from './Components/Preview/Preview';
import Content from './Components/Content/Content';
import handleCookies from './Helpers/handleCookies';

const App = function (taskList) {

  taskList = handleCookies(taskList);

  const app = new Container({ selectors: 'app' });
  const main = new Elem({ tag: 'main' });

  main.append([
    Sidebar_Showing(taskList),
    Preview(),
    Content(),
  ]);

  app.append([
    Header(),
    Sidebar_Hidden(taskList),
    main
  ]);

  return app;
}

export default App;