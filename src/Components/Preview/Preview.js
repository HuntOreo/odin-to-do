import { Container } from "elekit"
import Form from "./PreviewForm";

const Preview = (task, taskList) => {
	console.log(task);
	let container = document.querySelector('.taskCreator');
	if (container) {
		container.textContent = '';
		container.append(Form(task, taskList).DOMElement);
	} else {
		container = new Container({ selectors: ['taskCreator', 'hideElem'] }, { background: 'orange' });
		if (task) {
			container.append(Form(task, taskList));
		} else {
			container.DOMElement.textContent = '';
		}
	}

	return container;
}

export default Preview