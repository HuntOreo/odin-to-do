import { Container } from 'elekit';

const Content = (taskList) => {
  let container = document.querySelector('.content');
  if (!container) {
    container = new Container('content', { background: 'hotpink' });
  }

  return container;
}



export default Content;