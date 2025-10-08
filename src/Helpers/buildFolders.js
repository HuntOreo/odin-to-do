import { Container, Head } from "elekit";
import { DateTime } from "luxon";
import renderDayTasks from './events/renderDayTasks';
import toggleTaskEditor from "./events/toggleTaskEditor";


const buildFolders = (task, container, taskList) => {
	const taskMonth = task.date.month;
	const taskDay = task.date.day;
	let dayFolder, monthFolder;
	monthFolder = container.querySelector(`[data-month="${taskMonth}"]`);

	if (monthFolder) {
		dayFolder = monthFolder.querySelector(`[data-day="${taskDay}"]`);

		if (dayFolder) {
			buildDay(task.id, task.title, taskDay, dayFolder, monthFolder, true, taskList);
		} else {
			dayFolder = new Container('day').DOMElement;
			buildDay(task.id, task.title, taskDay, dayFolder, monthFolder, false, taskList);
		}
	} else {
		monthFolder = new Container('month').DOMElement;
		const header = new Head({
			size: 2,
			content: DateTime.fromObject(task.date).toFormat('LLLL'),
		}).DOMElement
		monthFolder.dataset.month = taskMonth;
		monthFolder.append(header);
		buildDay(task.id, task.title, taskDay, new Container('day').DOMElement, monthFolder, false, taskList);
	}

	return monthFolder;
}

function buildDay(id, title, date, day, month, exists, taskList) {
	if (exists) {
		day.innerHTML += `        
			<p data-id="${id}">${title}
				<button class="editTaskBtn" onclick="${() => toggleTaskEditor(id, taskList)}">
					⚙️
				</button>
			</p>`;
		const thisEditBtn = day.querySelector(`[data-id="${id}"] .editTaskBtn`);
		thisEditBtn.addEventListener('click', () => toggleTaskEditor(id, taskList))
	} else {
		day.addEventListener('click', () => renderDayTasks(day, taskList));
		day.innerHTML = `
        <h3>${date}</h3>
        <p data-id="${id}">${title}
					<button class="editTaskBtn">
						⚙️
					</button>
				</p>
      `;
		const thisEditBtn = day.querySelector(`[data-id="${id}"] .editTaskBtn`);
		thisEditBtn.addEventListener('click', () => toggleTaskEditor(id, taskList))
		day.dataset.day = date;
	}

	month.append(day);
}

export {
	buildFolders,
}