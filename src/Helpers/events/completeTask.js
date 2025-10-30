import Content from '../../Components/Content/Content';
import Sidebar_Showing from '../../Components/Sidebar_Showing/Sidebar_Showing';
import { updateCookie } from '../handleCookies';

const completeTask = (task, taskList, days) => {
  const index = taskList.findIndex(child => child.id === task.id);
  task.complete = !task.complete;
  taskList.splice(index, 1, task);

  updateCookie('userTasks', taskList);
  Content(taskList, days);
  Sidebar_Showing(taskList);
}

export default completeTask;