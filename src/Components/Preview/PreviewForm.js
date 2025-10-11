import { Container, Elem, Head } from "elekit"


const Form = (task, taskList) => {
	const taskDateParam = task.date;
	const container = new Container('formContainer');
	const date = new Head({
		size: 1,
		content:
			taskDateParam ? `${taskDateParam.month}/${taskDateParam.day}` : 'No Date'
	});
	const form = new Elem({
		tag: 'form',
		content: `
			<div class="wrapper">
				<input id="title" name="title" placeholder="Title..." value="${task.title}" required>
			</div>
			<div class="wrapper">
				<textarea id="content" name="content" placeholder="Content...">${task.content}</textarea>
			</div>
			<div class="wrapper checkboxes">
				<label for="priorityBox">
					Priority
					<input type="checkbox" id="priorityBox" name="priority">
				</label>
				<label for="colorBox">
					Color
					<input type="color" id="colorBox" name="color">
				</label>
			</div>
			<button id="submitTask" type="submit">+</button>
		`
	});

	const titleInput = form.DOMElement.querySelector('#title');
	const contentInput = form.DOMElement.querySelector('#content');
	const priorityBox = form.DOMElement.querySelector('#priorityBox');
	const colorInput = form.DOMElement.querySelector('#colorBox');
	const submitBtn = form.DOMElement.querySelector('#submitTask');

	titleInput.addEventListener('input', (e) => {
		const thisTask = document.querySelector(`.taskFolder [data-id="${task.id}"]`)
		thisTask.textContent = e.target.value;

		const taskIndex = taskList.findIndex(child => child === task);
		taskList[taskIndex].title = ;
		newTask.title = e.target.value;
	})

	container.append([date, form]);
	return container;
}

export default Form;