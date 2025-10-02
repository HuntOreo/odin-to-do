import { Elem, Input, Button, Container } from 'elekit';
import { openDateInput, updateDate } from '../../Helpers/events/handleDateInput';
import { addTask } from '../../Helpers/events/addTask';

const TaskForm = (taskList) => {
  const container = new Container('form_container', { background: 'pink' })
  const form = new Elem({
    tag: 'form',
    content: `
      <div class="wrapper">
        <label for="sidebarMonth">Month</label>
        <input type="number" min="1" max="12" name="month" id="sidebarMonth">
      </div>
      <div class="wrapper">
        <label for="sidebarDay">Day</label>
        <input type="number" min="1" max="31" name="day" id="sidebarDay">
      </div>
    `
  })
  // Hidden date input
  const dateInput = new Input({ type: 'date', selectors: 'hiddenDateInput' }, {
    display: 'none',
    border: 'none',
  });
  // Clickable icon to display the date picker input
  const calendarBtn = new Button({ content: `
    <span class="material-symbols-outlined">date_range</span>
  ` });
  const addTaskBtn = new Button('Add');

  dateInput.addListener('change', updateDate);
  calendarBtn.addListener('click', openDateInput);
  addTaskBtn.addListener('click', () => addTask(taskList));

  container.append([form, dateInput, calendarBtn, addTaskBtn]);
  return container;
}

export default TaskForm;