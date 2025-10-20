import Content from '../../Components/Content/Content';
import Sidebar_Showing from '../../Components/Sidebar_Showing/Sidebar_Showing';

const deleteTask = (taskID, taskList, days) => {
  const taskListIndex = taskList.findIndex(child => child.id === taskID);
  const daysIndex = days.findIndex(child => child.id === taskID);

  taskList.splice(taskListIndex, 1);
  days.splice(daysIndex, 1);

  Sidebar_Showing(taskList);
  Content(days);
}

export default deleteTask;