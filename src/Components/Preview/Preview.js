import { Container } from "elekit"
import Form from "./PreviewForm";

const Preview = (taskList, task) => {
	const container = new Container('taskCreator');

	if(task) {
		container.append(Form(taskList, task));
	} else {
		container.DOMElement.textContent = '';
	}

  return container;
}

export default Preview