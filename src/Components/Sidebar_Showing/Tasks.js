import { Container } from 'elekit';
import { buildFolders } from './helper/buildFolders';

const Tasks = (taskList) => {
  let tasksContainer = document.querySelector('.sidebar_showing .tasks');

  if (tasksContainer) {
    tasksContainer.textContent = '';
  } else {
    const container = new Container('tasks', { background: 'yellow' });
    tasksContainer = container;
  }

  for (let task of taskList) {
    if (tasksContainer.DOMElement) {
      const folder = buildFolders(task, tasksContainer.DOMElement, taskList);
      tasksContainer.DOMElement.append(folder);
    } else {
      const folder = buildFolders(task, tasksContainer, taskList);
      tasksContainer.append(folder);
    }
  }

  return tasksContainer;
}

export default Tasks;