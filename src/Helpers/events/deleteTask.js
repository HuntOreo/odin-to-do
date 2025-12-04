import Content from '../../Components/Content/Content';
import Sidebar_Showing from '../../Components/Sidebar_Showing/Sidebar_Showing';
import { updateCookie } from '../handleCookies';

const deleteTask = (taskID, taskList, tasks, appStateHolder) => {
  const appStateContent = appStateHolder.content;
  const taskListIndex = taskList.findIndex(child => child.id === taskID);
  const tasksIndex = tasks.findIndex(child => child.id === taskID);
  const contentIndex = appStateContent.findIndex(child => child.id === taskID);

  taskList.splice(taskListIndex, 1);
  tasks.splice(tasksIndex, 1);
  appStateContent.splice(contentIndex, 1);

  document.cookie = `userTasks=${JSON.stringify(taskList)}`;
  updateCookie('userTasks', taskList);
  updateCookie('appState', appStateHolder);

  Sidebar_Showing(taskList);
  Content(taskList, tasks);
}

export default deleteTask;