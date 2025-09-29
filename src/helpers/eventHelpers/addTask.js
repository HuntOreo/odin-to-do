import { Container } from "elekit";
import Task from "../../Components/Sidebar/Task";

const addTask = (date, content) => {
  const tasks = document.querySelector('.tasks');
  let monthFolder = document.querySelector(`[data-month="${date.month}"]`);
  let dayFolder;

  const task = new Task({ date, content });
  const taskContainer = new Container('task');
  taskContainer.append(task);

  if (monthFolder) {
    dayFolder = monthFolder.querySelector(`[data-day="${date.day}"]`);
  } else {
    monthFolder = buildMonthFolder(date.month).DOMElement;
  }

  if (dayFolder) {
    taskContainer.DOMElement.innerHTML = task.content;
  } else {
    dayFolder = buildDayFolder(date.day).DOMElement;
  }

  dayFolder.append(taskContainer.DOMElement);
  monthFolder.append(dayFolder);
  tasks.append(monthFolder);
}

function buildMonthFolder(month) {
  const folder = new Container('month');
  folder.DOMElement.innerHTML = `<h2>${month}</h2>`;
  folder.DOMElement.dataset.month = month;
  return folder
}

function buildDayFolder(day) {
  const folder = new Container('day');
  folder.DOMElement.innerHTML = `<h3>${day}</h3>`
  folder.DOMElement.dataset.day = day;
  return folder
}

export default addTask;