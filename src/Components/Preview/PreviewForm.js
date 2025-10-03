import { Container, Elem, Head } from "elekit"


const Form = (taskList, task) => {
	const container = new Container('formContainer');
	const date = new Head({ 
		size: 1,
		content: `
      ${task.date.month}/${task.date.day}
    `});
	const form = new Elem({
		tag: 'form',
		content: `
				<div class="wrapper">
					<input id="title" name="title" placeholder="Title..." value="${task.title}" required>
				</div>
				<div class="wrapper">
					<textarea id="content" name="content" placeholder="Content..." value="${task.content}"></textarea>
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
				<button type="submit">+</button>
		`
	});

	container.append([date, form]);
	return container;
}

export default Form;