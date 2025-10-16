import { DateTime } from 'luxon';
import Sidebar_Showing from '../../Components/Sidebar_Showing/Sidebar_Showing';
import updateCard from './updateCard';

const changeTaskDate = (event, task, taskList) => {
  const date = event.target.value;
  const luxonDate = DateTime.fromISO(date);

  const taskIndex = taskList.findIndex(child => child.id === task.id);
  taskList[taskIndex].date = {
    day: luxonDate.day,
    month: luxonDate.month,
    year: luxonDate.year,
  }

  Sidebar_Showing(taskList);
  updateCard(task)
}

export {
  changeTaskDate,
}