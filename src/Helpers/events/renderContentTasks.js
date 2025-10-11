import Preview from '../../Components/Preview/Preview';

function renderDayTasks(day, taskList) {
  const contentContainer = document.querySelector('.content');
  contentContainer.textContent = '';

  const tasks = day.querySelectorAll('p');

  for (let task of tasks) {
    const currentTask = taskList.filter(child => child.id == task.dataset.id)[0];
    contentContainer.innerHTML += `
      <div class='taskCard' data-id="${currentTask.id}">
        <h2>${currentTask.title}</h2>
        <p>${currentTask.content ? currentTask.content : 'Content...'}</p>
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
      </div>
    `

    const thisTaskCard =
      contentContainer.querySelector(`[data-id="${currentTask.id}"]`);
    thisTaskCard.addEventListener('click', () => {
      Preview(currentTask, taskList);
    });
  }


}

export default renderDayTasks;