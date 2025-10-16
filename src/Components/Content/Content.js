import { Container, Elem } from 'elekit';

const Content = (tasks) => {
  let container = document.querySelector('.content');
  if (!container) {
    container = new Container('content', { background: 'hotpink' });
  } else {
    container.textContent = '';
    for (let task of tasks) {
      const taskCard = new Elem({
        tag: 'div',
        selectors: 'taskCard',
        content: `
          <h2>${task.title}</h2>
          <p>${task.content ? task.content : 'Content...'}</p>
          <div class='container'>
            <div class='checkboxes'>
              <label>
                Priority
                <input class="priorityCheck" type='checkbox'>
              </label>
              <label>
                Color
                <input class="colorAssign" type='color'>
              </label>
            </div>
            <div class="btns">
              <button class="editTaskBtn">Edit</button>
              <button class="deleteTaskBtn">Delete</button>
            </div>
          </div>
        `
      });

      taskCard.DOMElement.dataset.id = task.id;

      taskCard.addListener('click', () => Preview(task, taskList));
      container.append(taskCard.DOMElement);
    }
  }

  return container;
}
export default Content;