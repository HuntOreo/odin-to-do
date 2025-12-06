import Content from '../../Components/Content/Content';
import Sidebar_Showing from '../../Components/Sidebar_Showing/Sidebar_Showing';
import { updateCookie } from '../handleCookies';

const completeTask = (task, taskList, appStateHolder) => {
  const index = taskList.findIndex(child => child.id === task.id);
  task.complete = !task.complete;
  taskList.splice(index, 1, task);

  updateCookie('userTasks', taskList);
  updateCookie('appState', appStateHolder);
  Sidebar_Showing(taskList);

  const completedTasks = taskList.filter(child => child.complete === true);

  Content(taskList, completedTasks, appStateHolder);
}

export default completeTask;