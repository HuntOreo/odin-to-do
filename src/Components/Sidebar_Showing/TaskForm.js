import { Elem, Input, Button, Container } from 'elekit';
import { openDateInput, updateDate } from '../../events/handleDateInput';

const TaskForm = (taskArr) => {
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
  ` })

  dateInput.addListener('change', updateDate);
  calendarBtn.addListener('click', openDateInput);

  const addTaskBtn = new Button('Add');

  container.append([form, dateInput, calendarBtn, addTaskBtn]);
  return container;
}

export default TaskForm;