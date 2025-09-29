import { Container } from "elekit";
import Task from "../Components/Sidebar/Task";
import { DateTime } from "luxon";

const toggleSide = (event) => {
  const app = document.querySelector('.app');
  app.classList.toggle('showSidebar');
  app.classList.toggle('hideSidebar');
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
  formatTaskDate
}