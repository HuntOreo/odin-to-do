import { Container } from 'elekit';
import { buildFolders } from '../../Helpers/buildFolders';

const Tasks = (taskList) => {
  let tasksContainer = document.querySelector('.sidebar_showing .tasks');

  if (tasksContainer) {
    tasksContainer.textContent = '';
  } else {
    const container = new Container('tasks', { background: 'yellow' });
    tasksContainer = container;
  }

  // Check if container is a DOM element (it existed)
  // or if its a Elem Object (it didnt exist)
  if (tasksContainer.DOMElement) {
    buildFolders(taskList, tasksContainer.DOMElement );
  } else {
    buildFolders(taskList, tasksContainer);
  }
  return tasksContainer;
}

export default Tasks;