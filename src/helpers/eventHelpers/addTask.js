import { Container } from "elekit";
import Task from "../../Components/Sidebar/Task";

const addTask = (date, content) => {
  let monthFolder = document.querySelector(`[data-month="${date.month}"]`);
  let dayFolder;
  let dayElement;
  let monthElement;

  const tasks = document.querySelector('.tasks');
  const task = new Task({ date, content });
  const taskContainer = new Container('task');

  taskContainer.append(task);

  if (monthFolder) {
    dayFolder = monthFolder.querySelector(`[data-day="${date.day}"]`);
    monthElement = monthFolder;
  } else {
    monthFolder = buildMonthFolder(date.month);
    monthElement = monthFolder.DOMElement;
  }

  if (dayFolder) {
    taskContainer.DOMElement.innerHTML = task.content;
    dayElement = dayFolder;
  } else {
    dayFolder = buildDayFolder(date.day);
    dayElement = dayFolder.DOMElement;
  }

  dayElement.append(taskContainer.DOMElement);
  monthElement.append(dayElement);
  tasks.append(monthElement);
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