import { Container, Elem } from 'elekit';
import Preview from '../Preview/Preview';
import deleteTask from '../../Helpers/events/deleteTask';
import toggleTaskCreator from '../../Helpers/events/toggleTaskCreator';

const Content = (taskList, days) => {
  let container = document.querySelector('.content');

  // if Content element doesnt exist, build it.
  if (!container) {
    container = new Container('content', { background: 'hotpink' });
  } else if (container) {

    // wipe content for re-rendering
    container.textContent = '';
    for (let task of days) {
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

      const editTaskBtn = taskCard.DOMElement.querySelector('.editTaskBtn');
      const deleteTaskBtn = taskCard.DOMElement.querySelector('.deleteTaskBtn');
      editTaskBtn.addEventListener('click', (e) => {
        Preview(task, taskList);
        toggleTaskCreator(e);
      });
      deleteTaskBtn.addEventListener('click', (e) => {
        deleteTask(task.id, taskList, days);
        toggleTaskCreator(e);
      });
      container.append(taskCard.DOMElement);
    }
  }

  return container;
}
export default Content;