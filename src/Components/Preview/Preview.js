import { Container } from "elekit"
import Form from "./PreviewForm";

const Preview = (task, taskList, appStateHolder) => {
	let container = document.querySelector('.task_creator');
	if (container) {
		container.textContent = '';
		container.append(Form(task, taskList, appStateHolder).DOMElement);
	} else {
		container = new Container(
			{ selectors: ['task_creator', 'hideElem'] });
		if (task) {
			container.append(Form(task, taskList, appStateHolder));
		} else {
			container.DOMElement.textContent = '';
		}
	}

	return container;
}

export default Preview