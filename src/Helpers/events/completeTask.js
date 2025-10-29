import { updateCookie } from '../handleCookies';

const completeTask = (task, taskList) => {
  const index = taskList.findIndex(child => child.id === task.id);
  task.complete = !task.complete;
  taskList.splice(index, 1, task);

  updateCookie('userTasks', taskList);
}

export default completeTask;