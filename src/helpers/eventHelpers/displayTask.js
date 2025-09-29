import { Container } from 'elekit';

const displayTask = (taskList, id) => {
  const content = document.querySelector('.content');
  if (!id) {
    taskList.forEach(task => {
      const container = new Container('content-task');
      container.DOMElement.innerHTML = task.content;
      content.append(container.DOMElement);
    })

  }
}

export default displayTask;