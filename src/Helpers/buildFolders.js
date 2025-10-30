import { Container, Head, Elem } from "elekit";
import { DateTime } from "luxon";
import Content from '../Components/Content/Content';
import renderPreview from "./events/renderPreview";
import { getMonths, getDays } from './folderFilter';
import deleteTask from './events/deleteTask';
import completeTask from './events/completeTask';

const buildFolders = (taskList, container) => {
	const months = getMonths(taskList);

	for (let month in months) {
		let monthFormatted;
		const thisMonth = months[month];

		if (month === 'misc') {
			monthFormatted = 'Misc';
		} else if (month === 'complete') {
			monthFormatted = 'Completed';
		} else {
			monthFormatted = DateTime.fromObject(thisMonth[0].date).toFormat('LLLL');
		}

		const monthFolder = new Container({ selectors: ['folder', 'month'] });
		const monthHeader = new Head({ size: 2, content: monthFormatted });
		monthFolder.append(monthHeader);


		createDayFolders(monthFolder, thisMonth, taskList, month);
		container.append(monthFolder.DOMElement);
	}
}

const createDayFolders = (monthFolder, month, taskList, monthName) => {
	const days = getDays(month);

	for (let day in days) {
		let thisDay;
		// if no date is provided, leave header blank.
		if (monthName == 'complete' || monthName == 'misc') {
			thisDay = '';
		} else {
			thisDay = days[day][0].date.day;
		}

		// build DOM elements
		const dayFolder = new Container({ selectors: ['folder', 'day'] });
		const dayHeader = new Head({ size: 3, content: thisDay });
		dayFolder.append(dayHeader);

		dayFolder.addListener('click', (e) => {
			if (
				e.target.closest('.day') &&
				!e.target.classList.contains('deleteTaskBtn')
			) {
				Content(taskList, days[day]);
			}
		})

		for (let task of days[day]) {
			// create a new task in the tree
			const taskFolder = new Elem({
				tag: 'div',
				selectors: 'taskFolder', content: `
				<span data-id="${task.id}">${task.title}</span>
				<button class="editTaskBtn">⚙️</button>
				<button class="deleteTaskBtn">🗑️</button>
				<button class="completeBtn">✅</button>
			`});

			// grab that tasks edit btn and assign listener
			const editTaskBtn = taskFolder.DOMElement.querySelector('.editTaskBtn');
			editTaskBtn.addEventListener('click', (e) => {
				renderPreview(task.id, taskList);
			})
			const deleteTaskBtn = taskFolder.DOMElement.querySelector('.deleteTaskBtn');
			deleteTaskBtn.addEventListener('click', (e) => {
				deleteTask(task.id, taskList, days[day]);
			})
			const completeBtn = taskFolder.DOMElement.querySelector('.completeBtn');
			completeBtn.addEventListener('click', (e) => {
				completeTask(task, taskList, days[day]);
			})
			dayFolder.append(taskFolder);
		}
		monthFolder.append(dayFolder);
	}
}

export {
	buildFolders,
}