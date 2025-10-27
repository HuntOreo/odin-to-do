import { Container, Elem } from 'elekit';
import Preview from '../Preview/Preview';
import deleteTask from '../../Helpers/events/deleteTask';
import toggleTaskCreator from '../../Helpers/events/toggleTaskCreator';
import updateColor from '../../Helpers/events/updateColor';

const Content = (taskList, days) => {
  let container = document.querySelector('.content');

  // if Content element doesnt exist, build it.
  if (!container) {
    container = new Container('content', { background: 'hotpink' });
  } else if (container) {
    const tasksWrapper = new Container('wrapper');
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
                <input class="assignColor" type='color'>
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

      // Assign Event Listeners
      const editTaskBtn = taskCard.DOMElement.querySelector('.editTaskBtn');
      const deleteTaskBtn = taskCard.DOMElement.querySelector('.deleteTaskBtn');
      const assignColorInput = taskCard.DOMElement.querySelector('.assignColor');

      editTaskBtn.addEventListener('click', (e) => {
        Preview(task, taskList);
      });
      deleteTaskBtn.addEventListener('click', (e) => {
        deleteTask(task.id, taskList, days);
      });
      assignColorInput.addEventListener('input', (e) => {
        console.log('e.target');
        updateColor()
      });

      tasksWrapper.append(taskCard)
    }
    container.append(tasksWrapper.DOMElement);
  }

  return container;
}
export default Content;