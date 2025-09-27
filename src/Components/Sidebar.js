import { Container } from 'elekit';
import TaskForm from './Sidebar/TaskForm';

const Sidebar = function () {
  const container = new Container({ selectors: 'sidebar' }, {
    background: 'lightgreen',
  });
  const tasksContainer = new Container({selectors: 'tasks'});

  container.appendEl([ TaskForm(), tasksContainer]);
  return container;
}

export default Sidebar;

/*
  Sidebar will be for navigating tasks. 
  Will be organized by months and days. 
  Each month will be a folder, with days nested inside it, 
    and tasks nested inside those days.
  Months > Days > Tasks

  There will be mutliple ways to create a task. 
  On the main sidebar, You can create a month folder, 
    where you will be able to create a task and assign it a day of the month.
  You could also create a task and assign it a month/date that way.
  You could also create a task without assigning it a month or day, and it will just sit
    outside of the folder tree.
*/