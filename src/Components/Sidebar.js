import { Button, Container } from 'elekit';
import Task from './Task-sidebar';

const Sidebar = function () {
  const container = new Container({ selectors: 'sidebar' }, {
    background: 'lightcoral',
  });

  const addTaskBtn = new Button('Add Task');
  const task = new Task('Placeholder text');

  container.appendEl([addTaskBtn, task]);
  return container;
}

export default Sidebar;