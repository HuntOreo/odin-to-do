import { Elem } from 'elekit';
import Preview from '../../Components/Preview/Preview';

function renderDayTasks(tasks, taskList) {
  console.log(tasks);
  console.log(taskList);
  const contentContainer = document.querySelector('.content');
  contentContainer.textContent = '';

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
    contentContainer.append(taskCard.DOMElement);
  }
}

export default renderDayTasks;