import { DateTime } from 'luxon';
import Sidebar_Showing from '../../Components/Sidebar_Showing/Sidebar_Showing';
import Content from '../../Components/Content/Content';
import updateTaskCreator from '../updateTaskCreator';
import { updateCookie } from '../handleCookies';

const changeTaskDate = (event, task, taskList) => {
  const date = event.target.value;
  const luxonDate = DateTime.fromISO(date);

  const taskIndex = taskList.findIndex(child => child.id === task.id);
  const updatedTask = taskList[taskIndex];
  updatedTask.date = {
    day: `${luxonDate.day}`,
    month: `${luxonDate.month}`,
    year: `${luxonDate.year}`,
  }

  // update sidebar tree
  Sidebar_Showing(taskList);

  // update content with matching days
  const matchingTasks = taskList.filter(child => {
    return child.date.month == updatedTask.date.month
  });
  
  Content(taskList, matchingTasks);
  updateTaskCreator(task, taskList);
  updateCookie('userTasks', taskList);
}

export {
  changeTaskDate,
}