import { Button, Container } from 'elekit';

const Sidebar = function () {
  const container = new Container({ selectors: 'sidebar' }, {
    background: 'lightcoral',
  });

  const addTaskBtn = new Button('Add Task');

  return container;
}

export default Sidebar;