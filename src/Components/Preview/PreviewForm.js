import { Container, Elem, Head } from "elekit"
import renderContentTasks from '../../Helpers/events/renderContentTasks'
import { buildFolders } from '../../Helpers/buildFolders';

const Form = (task, taskList) => {
	console.log(task)
	const taskDateParam = task.date;
	const container = new Container('formContainer');
	const date = new Head({
		size: 1,
		content:
			taskDateParam.day === '' || 
			taskDateParam.month === '' ? 
			'No Date' :
			`${taskDateParam.month}/${taskDateParam.day}` 
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

	form.DOMElement.id = 'taskCreatorForm';

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

		const formTitle = formData.get('title');
		const formContent = formData.get('content');
		const formColor = formData.get('color');
		const formPriority = formData.get('priority');

		const taskIndex = taskList.findIndex(child => child === task);
		taskList[taskIndex].title = formTitle;
		taskList[taskIndex].content = formContent;
		taskList[taskIndex].color = formColor;
		taskList[taskIndex].priority = formPriority ? true : false;

		const contentContainer = document.querySelector('.content');
		const card = contentContainer.querySelector(`[data-id="${task.id}"]`);
		updateTaskCard(task, card)
	})

	container.append([date, form]);
	return container;
}

function updateTaskCard(data, card) {
	card.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.content ? data.content : 'Content...'}</p>
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

export default Form;