import { Elem, } from "elekit";
import Task from "../Components/Task-sidebar";
import { DateTime } from "luxon";

const toggleSide = (event) => {
  const app = document.querySelector('.app');
  app.classList.toggle('showSidebar');
  app.classList.toggle('hideSidebar');
}

const addTask = (date) => {
  const container = document.querySelector('.tasks');
  const newTask = Task('words words words');
  const monthFolder = document.querySelector(`[data-month="${date.month}"]`);
  const monthExists = Boolean(monthFolder);

  if(monthExists) {
    newTask.DOMElement.dataset.month = date.month;
    monthFolder.append(newTask.DOMElement);
  } else {
    const newFolder = new Elem ({ 
      tag: 'div',
      content: `${date.month}`
    }, { background: 'skyblue' });

    newFolder.DOMElement.dataset.month = date.month;

    newFolder.appendEl(newTask);
    container.append(newFolder.DOMElement);
   }
}

const formatTaskDate = (date) => {
  const dateObj = DateTime.fromISO(date);
  const month = dateObj.toFormat('LLLL');
  const day = dateObj.toFormat('dd');
  const year = dateObj.toFormat('yyyy');

  return {
    month,
    day,
    year
  }
}

export {
    toggleSide,
    addTask,
		formatTaskDate
}