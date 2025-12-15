import Content from '../../Components/Content/Content';
import Sidebar_Showing from '../../Components/Sidebar_Showing/Sidebar_Showing';
import { updateCookie } from '../handleCookies';

const completeTask = (task, taskList, dayTasks, appStateHolder) => {

  const listIndex = taskList.findIndex(child => child.id === task.id);
  const dayIndex = dayTasks.findIndex(child => child.id === task.id);
  task.complete = !task.complete;
  taskList.splice(listIndex, 1, task);
  dayTasks.splice(dayIndex, 1);

  appStateHolder.content = dayTasks;

  updateCookie('userTasks', taskList);
  updateCookie('appState', appStateHolder);
  Sidebar_Showing(taskList, appStateHolder);

  const completedTasks = taskList.filter(child => child.complete === true);

  Content(taskList, completedTasks, appStateHolder);
}

export default completeTask;