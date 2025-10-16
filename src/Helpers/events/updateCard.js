const updateCard = (task) => {
  const contentContainer = document.querySelector('.content');
  const card = contentContainer.querySelector(`[data-id="${task.id}"]`);

  card.innerHTML = `
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
}

export default updateCard