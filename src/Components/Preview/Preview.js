import { Container } from "elekit"
import Form from "./PreviewForm";

const Preview = (task, taskList) => {
	let container = document.querySelector('.task_creator');
	if (container) {
		container.textContent = '';
		container.append(Form(task, taskList).DOMElement);
	} else {
		container = new Container(
			{ selectors: ['task_creator', 'hideElem'] },
			{ background: 'orange' }
		);
		if (task) {
			container.append(Form(task, taskList));
		} else {
			container.DOMElement.textContent = '';
		}
	}

	return container;
}

export default Preview