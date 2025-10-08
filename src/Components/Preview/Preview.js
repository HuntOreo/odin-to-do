import { Container } from "elekit"
import Form from "./PreviewForm";

const Preview = (task, taskList) => {
	const container = new Container({selectors: ['taskCreator', 'hideElem']});

	if(task) {
		container.append(Form(task, taskList));
	} else {
		container.DOMElement.textContent = '';
	}

  return container;
}

export default Preview