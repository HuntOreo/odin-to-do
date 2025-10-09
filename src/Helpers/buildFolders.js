import { Container, Head } from "elekit";
import { DateTime } from "luxon";
import renderDayTasks from './events/renderDayTasks';
import renderPreview from "./events/renderPreview";
import toggleTaskCreator from "./events/toggleTaskCreator";


const buildFolders = (task, container, taskList) => {
	console.log('hello!!!!');
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
				<button class="editTaskBtn" onclick="toggleTaskCreator">
					⚙️
				</button>
			</p>`;
	} else {
		day.addEventListener('click', () => renderDayTasks(day, taskList));
		day.innerHTML = `
        <h3>${date}</h3>
        <p data-id="${id}">${title}
			<button class="editTaskBtn" onclick="toggleTaskCreator">
			⚙️
			</button>
		</p>`;
		day.dataset.day = date;
	}

	month.append(day);

	const thisEditBtn = day.querySelector(`[data-id="${id}"] .editTaskBtn`);
	console.log(thisEditBtn)
	thisEditBtn.addEventListener('click', (e) => {
		toggleTaskCreator(e);
		// renderPreview(id, taskList)
	})
}

export {
	buildFolders,
}