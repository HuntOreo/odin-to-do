import { Container, Elem } from 'elekit';
import Header from './Components/Header/Header';
import Sidebar_Hidden from './Components/Sidebar_Hidden/Sidebar_Hidden';
import Sidebar_Showing from './Components/Sidebar_Showing/Sidebar_Showing';
import Preview from './Components/Preview/Preview';
import Content from './Components/Content/Content';
import { getAppStateFromCookies, getTasksFromCookies } from './Helpers/handleCookies';
import { applyAppState } from './Helpers/handleAppState';

const App = function (taskList, appStateHolder) {

  taskList = getTasksFromCookies(taskList);
  appStateHolder = getAppStateFromCookies(appStateHolder);
  console.log(appStateHolder);

  const app = new Container({ selectors: 'app' });
  const main = new Elem({ tag: 'main' });

  main.append([
    Sidebar_Showing(taskList, appStateHolder),
    Preview(),
  ]);

  if (appStateHolder.content) {
    main.append(Content(taskList, appStateHolder.content, appStateHolder));
  } else {
    main.append(Content(taskList, appStateHolder.content, appStateHolder));
  }

  app.append([
    Header(),
    Sidebar_Hidden(taskList, appStateHolder),
    main
  ]);

  for (let stateName in appStateHolder) {
    applyAppState({
      stateName,
      stateValue: appStateHolder[stateName]
    }, app.DOMElement)
  }

  return app;
}

export default App;