import { Elem } from "elekit";
import { DateTime } from "luxon";
import { formatTaskDate, addTask } from "../../helpers/events";

const TaskForm = function () {
	const date = DateTime.now();
	const dateFormatted = {
		day: date.day < 10 ? `0${date.day}` : date.day,
		month: date.month < 10 ? `0${date.month}` : date.month,
		year: date.year
	}

  const form = new Elem({ tag: 'form',
    content: `
      <div class="container">
        <div class="wrapper">
					<label for="sidebarDateInput">Date</label>
					<input type="date" name="date" id="sidebarDateInput" value="${dateFormatted.year}-${dateFormatted.month}-${dateFormatted.day}">
				</div>
				<div class="wrapper">
					<label for="sidebarContentInput">Content</label>
					<input type="text" name="content" id="sidebarContentInput" placeholder="task...">
				</div>
				<button type="button" id="sidebarAddTaskBtn">Add Task</button>
      </div>
    `
  });

	const formEl = form.DOMElement;
	const taskBtn = formEl.querySelector('#sidebarAddTaskBtn');
	const dateInput = formEl.querySelector('#sidebarDateInput');
	const contentInput = formEl.querySelector('#sidebarContentInput');
	taskBtn.addEventListener('click', () => {
      const formattedDate = formatTaskDate(dateInput.value);
			const content = contentInput.value;
      addTask(formattedDate, content);
    });

	return form;
}

export default TaskForm;
