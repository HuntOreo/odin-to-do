import { Container, Elem } from "elekit";
import PreviewHeader from './PreviewHeader';
import updateCard from '../../Helpers/events/updateCard';
import { updateCookie } from "../../Helpers/handleCookies";

const Form = (task, taskList) => {
	const container = new Container('formContainer');

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

	form.DOMElement.id = 'taskCreatorForm';

	// Form inputs
	const titleInput = form.DOMElement.querySelector('#title');
	const contentInput = form.DOMElement.querySelector('#content');
	const priorityBox = form.DOMElement.querySelector('#priorityBox');
	const colorInput = form.DOMElement.querySelector('#colorBox');
	const submitBtn = form.DOMElement.querySelector('#submitTask');

	titleInput.addEventListener('input', (e) => {
		const thisTask = document.querySelector(`.taskFolder [data-id="${task.id}"]`)
		thisTask.textContent = e.target.value;

		const taskIndex = taskList.findIndex(child => child === task);
		taskList[taskIndex].title = e.target.value;
	})

	submitBtn.addEventListener('click', (e) => {
		e.preventDefault();
		const formElem = container.DOMElement.querySelector('#taskCreatorForm');
		const formData = new FormData(formElem);

		// Grab form data
		const formTitle = formData.get('title');
		const formContent = formData.get('content');
		const formColor = formData.get('color');
		const formPriority = formData.get('priority');

		const taskIndex = taskList.findIndex(child => child === task);
		taskList[taskIndex].title = formTitle;
		taskList[taskIndex].content = formContent;
		taskList[taskIndex].color = formColor;
		taskList[taskIndex].priority = formPriority ? true : false;

		updateCard(task);
		updateCookie('userTasks', taskList);
	});

	container.append([PreviewHeader(task, taskList), form]);
	return container;
}



export default Form;