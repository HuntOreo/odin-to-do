import { Container } from "elekit"
import Form from "./PreviewForm";

const Preview = (task, taskList) => {
	let container = document.querySelector('.taskCreator');
	if(container) {
		container.textContent = '';
		container.append(Form(task, taskList).DOMElement);
	} else {
		container = new Container({selectors: ['taskCreator', 'hideElem']});
		if(task) {
			container.append(Form(task, taskList));
		} else {
			container.DOMElement.textContent = '';
		}
	}

  return container;
}

export default Preview