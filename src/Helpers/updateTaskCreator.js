const updateTaskCreator = (task, taskList) => {
  const app = document.querySelector('.app');
  const taskCreatorHead = app.querySelector('.formContainer .head h1');

  console.log(task);

  taskCreatorHead.textContent = `${task.date.month}/${task.date.day}`
  
}

export default updateTaskCreator;