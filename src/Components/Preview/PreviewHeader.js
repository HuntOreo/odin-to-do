import { Container, Button, Head, Input } from 'elekit';
import { openDateInput } from '../../Helpers/events/handleDateInput';
import { changeTaskDate } from '../../Helpers/events/changeTaskDate';

const PreviewHeader = (task, taskList, appStateHolder) => {
  const taskDateParam = task.date;

  const container = new Container('head');
  const date = new Head({
    size: 1,
    content:
      !taskDateParam.day ||
        !taskDateParam ?
        'No Date' :
        `${taskDateParam.month}/${taskDateParam.day}`
  });

  // Hidden date input
  const hiddenDateInput = new Input({
    type: 'date',
    selectors: 'hiddenDateInput'
  }, {
    display: 'none',
    border: 'none',
  });
  // Clickable icon to display the date picker input
  const calendarBtn = new Button({
    content: `
    <span class="material-symbols-outlined">date_range</span>
  ` });
  hiddenDateInput.addListener('change',
    (event) => changeTaskDate(event, task, taskList, appStateHolder)
  );
  calendarBtn.addListener('click', () => openDateInput(container.DOMElement));

  container.append([date, hiddenDateInput, calendarBtn]);
  return container;
}

export default PreviewHeader