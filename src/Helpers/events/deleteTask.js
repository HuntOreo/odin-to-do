import Content from '../../Components/Content/Content';
import Sidebar_Showing from '../../Components/Sidebar_Showing/Sidebar_Showing';

const deleteTask = (taskID, taskList, days) => {
  const taskListIndex = taskList.findIndex(child => child.id === taskID);
  const daysIndex = days.findIndex(child => child.id === taskID);

  taskList.splice(taskListIndex, 1);
  days.splice(daysIndex, 1);

  document.cookie = `userTasks=${JSON.stringify(taskList)}`;

  Sidebar_Showing(taskList);
  Content(taskList, days);
}

export default deleteTask;