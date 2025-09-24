import { Button, Container } from 'elekit';
import Task from './Task-sidebar';
import { addTask } from '../helpers/events';

const Sidebar = function () {
  const container = new Container({ selectors: 'sidebar' }, {
    background: 'lightcoral',
  });
  const addTaskBtn = new Button('Add Task');
  addTaskBtn.addListener('click', addTask);
  
  const tasksContainer = new Container({selectors: 'tasks'});
  const task = new Task('Placeholder text');
  tasksContainer.appendEl(task);
  
  container.appendEl([addTaskBtn, tasksContainer]);
  return container;
}

export default Sidebar;