import { Container, Head } from "elekit";
import { DateTime } from "luxon";
import renderDayTasks from '../../../Helpers/events/renderContentTasks';
import renderPreview from "../../../Helpers/events/renderPreview";


const buildFolders = (task, container, taskList) => {
	const taskMonth = task.date.month;
	const taskDay = task.date.day;
	let dayFolder, monthFolder;
	monthFolder = container.querySelector(`[data-month="${taskMonth}"]`);

	if (monthFolder) {
		dayFolder = monthFolder.querySelector(`[data-day="${taskDay}"]`);
		if (dayFolder) {
			buildDay(
				task,
				dayFolder,
				monthFolder,
				taskList,
				true,
			);
		} else {
			dayFolder = new Container('day').DOMElement;
			buildDay(
				task,
				dayFolder,
				monthFolder,
				taskList,
				false,
			);
		}
	} else {
		monthFolder = new Container('month').DOMElement;
		const header = new Head({
			size: 2,
			content: DateTime.fromObject(task.date).toFormat('LLLL'),
		}).DOMElement

		monthFolder.dataset.month = taskMonth;
		monthFolder.append(header);
		buildDay(
			task,
			new Container('day').DOMElement,
			monthFolder,
			taskList,
			false
		);
	}

	return monthFolder;
}

function buildDay(task, dayFolder, monthFolder, taskList, exists) {

	if (exists) {
		dayFolder.innerHTML += `        
			<p data-id="${task.id}">${task.title}
				<button class="editTaskBtn">
					⚙️
				</button>
			</p>`;
	} else {
		dayFolder.innerHTML += `
      <h3>${task.date.day}</h3>
      <p data-id="${task.id}">${task.title}
				<button class="editTaskBtn">
					⚙️
				</button>
			</p>
    `;
		dayFolder.dataset.day = task.date.day;
	}

	dayFolder.addEventListener('click', () => renderDayTasks(dayFolder, taskList));

	const thisEditBtn = dayFolder.querySelector(`[data-id="${task.id}"] > button`);
	thisEditBtn.addEventListener('click', (e) => {
		renderPreview(task.id, taskList)
	}
	);
	monthFolder.append(dayFolder);
}

export {
	buildFolders,
}