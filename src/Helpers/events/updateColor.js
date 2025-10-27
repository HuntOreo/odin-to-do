const updateColor = (color, card, task, taskList) => {
  task.color = color;
  const index = taskList.findIndex(child => child.id === task.id);
  taskList[index] = task;

  card.style.border = `2px solid ${color}`;
}

export default updateColor