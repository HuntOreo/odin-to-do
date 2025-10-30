import Content from '../../Components/Content/Content';
import Sidebar_Showing from '../../Components/Sidebar_Showing/Sidebar_Showing';
import { updateCookie } from '../handleCookies';

const completeTask = (task, taskList) => {
  const index = taskList.findIndex(child => child.id === task.id);
  task.complete = !task.complete;
  taskList.splice(index, 1, task);

  updateCookie('userTasks', taskList);
  Sidebar_Showing(taskList);

  const completedTasks = taskList.filter(child => child.complete === true);

  Content(taskList, completedTasks);
}

export default completeTask;