import Task from "../Components/Task-sidebar";
import { DateTime } from "luxon";

const toggleSide = (event) => {
  const app = document.querySelector('.app');
  app.classList.toggle('showSidebar');
  app.classList.toggle('hideSidebar');
}

const addTask = (date) => {
  const container = document.querySelector('.tasks');
  const newTask = Task(date);
  container.append(newTask.DOMElement);
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