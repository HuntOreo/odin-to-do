import { Container, Head, Elem } from "elekit";
import { DateTime } from "luxon";
import Content from '../Components/Content/Content';
import renderPreview from "./events/renderPreview";
import toggleTaskCreator from "./events/toggleTaskCreator";
import { getMonths, getDays } from './folderFilter';

const buildFolders = (taskList, container) => {
	const months = getMonths(taskList);

	for (let month in months) {
		let monthFormatted;
		const thisMonth = months[month];

		if (month != 'misc') {
			monthFormatted = DateTime.fromObject(thisMonth[0].date).toFormat('LLLL');
		} else {
			monthFormatted = 'Misc';
		}

		const monthFolder = new Container({ selectors: ['folder', 'month'] });
		const monthHeader = new Head({ size: 2, content: monthFormatted });
		monthFolder.append(monthHeader);


		createDayFolders(monthFolder, thisMonth, taskList);
		container.append(monthFolder.DOMElement);
	}
}

const createDayFolders = (monthFolder, month, taskList) => {
	const days = getDays(month);

	for (let day in days) {
		let thisDay;
		// if no date is provided, leave header blank.
		if (!month) {
			thisDay = '';
		} else {
			thisDay = days[day][0].date.day;
		}

		// build DOM elements
		const dayFolder = new Container({ selectors: ['folder', 'day'] });
		const dayHeader = new Head({ size: 3, content: thisDay });
		dayFolder.append(dayHeader);

		dayFolder.addListener('click', (e) => {
			if (e.target.closest('.day')) {
				Content(days[day]);
			}
		})

		for (let task of days[day]) {
			// create a new task in the tree
			const taskFolder = new Elem({
				tag: 'div',
				selectors: 'taskFolder', content: `
				<span data-id="${task.id}">${task.title}</span>
				<button class="editTaskBtn">⚙️</button>
			`});

			// grab that tasks edit btn and assign listener
			const btn = taskFolder.DOMElement.querySelector('.editTaskBtn');
			btn.addEventListener('click', (e) => {
				toggleTaskCreator(e);
				renderPreview(task.id, taskList);
			})
			dayFolder.append(taskFolder);
		}
		monthFolder.append(dayFolder);
	}
}

export {
	buildFolders,
}