import { Container } from "elekit";
import Task from "../Components/Sidebar/Task";
import { DateTime } from "luxon";

const toggleSide = (event) => {
  const app = document.querySelector('.app');
  app.classList.toggle('showSidebar');
  app.classList.toggle('hideSidebar');
}

const addTask = (date, content) => {
  const container = document.querySelector('.tasks');
  const monthFolder = document.querySelector(`[data-month="${date.month}"]`);

  if(monthFolder) {
    const dayFolder = document.querySelector(`[data-day="${date.day}"]`);
    if (dayFolder) {  
      const taskContainer = new Container('task');
      const task = new Task({ date, content });
      taskContainer.DOMElement.innerHTML = task.content;
      dayFolder.append(taskContainer.DOMElement);
    } else {
      const newDayFolder = new Container('day');
      newDayFolder.DOMElement.innerHTML = `<h3>${date.day}</h3>`;
      newDayFolder.DOMElement.dataset.day = date.day;
      const task = new Task({ date, content });

      newDayFolder.appendEl(task);
      monthFolder.append(newDayFolder.DOMElement);
      container.append(monthFolder);
    }
  } else {
    const newMonthFolder = new Container('month');
    newMonthFolder.DOMElement.innerHTML = `<h2>${date.month}</h2>`;
    newMonthFolder.DOMElement.dataset.month = date.month;
    const newDayFolder = new Container('day');
    newDayFolder.DOMElement.innerHTML = `<h3>${date.day}</h3>`
    newDayFolder.DOMElement.dataset.day = date.day;
    const task = new Task({ date, content });
    
    newDayFolder.appendEl(task);
    newMonthFolder.appendEl(newDayFolder);
    container.append(newMonthFolder.DOMElement);
  }

    /*
    Take date and content values from inputs
    Check if the month exists
    if yes:
      check if day exists
        if yes:
          create task
          append task to day
        if no:
          create day
          create task
          append day to month
          append task to day
    if no: 
      create month folder, 
        create day folder,
        append day folder,
          create new task
            task will keep track of associated dates.  
          append task to day.
  */
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