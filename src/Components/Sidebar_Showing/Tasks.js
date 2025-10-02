import { Container } from 'elekit';
import { buildFolders } from '../../Helpers/buildFolders';

const Tasks = (tasksArr) => {
  let tasksContainer = document.querySelector('.sidebar_showing .tasks');
  
  if (tasksContainer) {
    tasksContainer.textContent = '';
  } else  {
    const container = new Container('tasks', { background: 'yellow' });
    tasksContainer = container;
  }
  
  for (let task of tasksArr) {
    if (tasksContainer.DOMElement) {
      const folder = buildFolders(task, tasksContainer.DOMElement);
      tasksContainer.DOMElement.append(folder);
    } else {
      const folder = buildFolders(task, tasksContainer);
      tasksContainer.append(folder);

    }
  }

  console.log(tasksContainer);
  return tasksContainer;
}

export default Tasks;