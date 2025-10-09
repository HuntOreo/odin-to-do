import { Container } from 'elekit';
import toggleTaskEditor from '../../Helpers/events/toggleTaskEditor';

const Content = (taskList) => {
  let container = document.querySelector('.content');
  if (!container) {
    container = new Container('content', { background: 'hotpink' });
    container.addListener('click', (e) => selectTask(e.target, taskList));
  } else {
    container.addEventListener('click', (e) => selectTask(e.target, taskList));
  }


  return container;
}

function selectTask(element, taskList) {
  if (element.closest('.taskCard')) {
    console.log('clicked!');
    const taskId = element.dataset.id;
    toggleTaskEditor(taskId, taskList);
  }
}


export default Content;