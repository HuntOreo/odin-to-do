import { Container, Head } from "elekit";
import { DateTime } from "luxon";
import renderDayTasks from '../../../Helpers/events/renderContentTasks';
import toggleTaskEditor from "../../../Helpers/events/toggleTaskEditor";


const buildFolders = (task, container, taskList) => {
	const taskMonth = task.date.month;
	const taskDay = task.date.day;
	let dayFolder, monthFolder;
	monthFolder = container.querySelector(`[data-month="${taskMonth}"]`);

	if (monthFolder) {
		dayFolder = monthFolder.querySelector(`[data-day="${taskDay}"]`);
		if (dayFolder) {
			buildDay(
				task.id,
				task.title,
				taskDay,
				dayFolder,
				monthFolder,
				true,
				taskList);
		} else {
			dayFolder = new Container('day').DOMElement;
			buildDay(
				task.id,
				task.title,
				taskDay,
				dayFolder,
				monthFolder,
				false,
				taskList
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
			task.id,
			task.title,
			taskDay,
			new Container('day').DOMElement,
			monthFolder,
			false,
			taskList
		);
	}

	return monthFolder;
}

function buildDay(id, title, date, day, month, exists, taskList) {
	if (exists) {
		day.innerHTML += `        
			<p data-id="${id}">${title}
				<button class="editTaskBtn">
					⚙️
				</button>
			</p>`;
	} else {
		day.innerHTML = `
      <h3>${date}</h3>
      <p data-id="${id}">${title}
				<button class="editTaskBtn">
					⚙️
				</button>
			</p>
    `;
		day.dataset.day = date;
	}

	day.addEventListener('click', () => renderDayTasks(day, taskList));

	const thisEditBtn = day.querySelector(`[data-id="${id}"] .editTaskBtn`);
	thisEditBtn.addEventListener('click', (e) => toggleTaskEditor(id, taskList, e));
	month.append(day);
}

export {
	buildFolders,
}