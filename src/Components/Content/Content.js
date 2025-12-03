import { Container, Elem } from 'elekit';
import Preview from '../Preview/Preview';
import deleteTask from '../../Helpers/events/deleteTask';
import updateColor from '../../Helpers/events/updateColor';
import updatePriority from '../../Helpers/events/updatePriority';
import { updateCookie } from '../../Helpers/handleCookies';

const Content = (taskList, tasks) => {
  let container = document.querySelector('.content');

  // if Content element doesnt exist, build it.
  if (!container) {
    container = new Container('content', { background: 'hotpink' });
    if (tasks) { // if days exist...
      renderContent(taskList, tasks, container.DOMElement);
    }
    return container;
  } else if (container) {
    if (tasks) { // if days exist...
      renderContent(taskList, tasks, container);
    }
    return container;
  }
}

const renderContent = (taskList, tasks, container) => {
  const tasksWrapper = new Container('wrapper');
  // wipe content for re-rendering
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
                <input class="priorityCheck" type='checkbox' ${task.priority ? 'checked' : null}>
              </label>
              <label>
                Color
                <input class="assignColor" type='color' value='${task.color}'>
              </label>
            </div>
            <div class="btns">
              <button class="editTaskBtn">Edit</button>
              <button class="deleteTaskBtn">Delete</button>
            </div>
          </div>
        `
    });

    // Assign pair task with card by ID.
    taskCard.DOMElement.dataset.id = task.id;

    // Apply color code if one exists.
    if (task.color) {
      taskCard.applyTemplate({
        border: `3px solid ${task.color}`
      });
    }

    // Assign Event Listeners
    const editTaskBtn = taskCard.DOMElement.querySelector('.editTaskBtn');
    const deleteTaskBtn = taskCard.DOMElement.querySelector('.deleteTaskBtn');
    const assignColorInput = taskCard.DOMElement.querySelector('.assignColor');
    const priorityBox = taskCard.DOMElement.querySelector('.priorityCheck');

    editTaskBtn.addEventListener('click', () => Preview(task, taskList));
    deleteTaskBtn.addEventListener('click', () => deleteTask(task.id, taskList, tasks));
    assignColorInput.addEventListener('input', (e) => {
      const color = e.target.value;
      updateColor(color, taskCard, task, taskList);
      updateCookie('userTasks', taskList);
    });
    priorityBox.addEventListener('change', (e) => updatePriority(e, task, taskList))

    tasksWrapper.append(taskCard)
  }
  container.append(tasksWrapper.DOMElement);
}

export default Content;