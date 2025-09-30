import { Elem, Input, Button, Container } from 'elekit';

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
  const dateInput = new Input({ type: 'date' }, {
    width: '28px',
    border: 'none'
  });
  const button = new Button('Add');

  container.append([form, dateInput, button]);
  return container;
}

export default TaskForm;