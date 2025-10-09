import { Container } from 'elekit';
import renderPreview from '../../Helpers/events/renderPreview';

const Content = (taskList) => {
  let container = document.querySelector('.content');
  if (!container) {
    container = new Container('content', { background: 'hotpink' });
    // container.addListener('click', (e) => selectTask(e.target, taskList));
  } else {
    // container.addEventListener('click', (e) => selectTask(e.target, taskList));
  }
  return container;
}
export default Content;