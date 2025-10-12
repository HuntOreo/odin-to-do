import { Container, Head, Elem } from "elekit";
import { DateTime } from "luxon";
import renderContentTasks from './events/renderContentTasks'
import renderPreview from "./events/renderPreview";
import toggleTaskCreator from "./events/toggleTaskCreator";

const buildFolders = (taskList, container) => {
	const months = {};

	for (let child of taskList) {
		if (!child.date) {
			months.misc = []
		}
		if (!months[child.date.month]) {
			months[child.date.month] = []
		}
	}
	for (let month in months) {
		for (let child of taskList) {
			if (!child.date) {
				months.misc.push(child);
			}

			if (month == child.date.month) {
				months[month].push(child)
			}
		}
	}

	for (let month in months) {
		let monthFormatted;
		const thisMonth = months[month];
		
		if(month) {
			monthFormatted = DateTime.fromObject(thisMonth[0].date).toFormat('LLLL');
		} else {
			monthFormatted = 'Misc';
		}
		
		const monthFolder = new Container({ selectors: ['folder', 'month'] });
		const monthHeader = new Head({ size: 2, content: monthFormatted });
		monthFolder.append(monthHeader);

		const days = {}
		for (let task of thisMonth) {
			days[task.date.day] = thisMonth.filter(child => {
				return child.date.day == task.date.day;
			})
		}

		for (let day in days) {
			let thisDay;

			// if no date is provided, dont provide day header
			if(!month) {
				thisDay = '';
			} else {
				thisDay = days[day][0].date.day;
			}

			const dayFolder = new Container({ selectors: ['folder', 'day'] });
			const dayHeader = new Head({ size: 3, content: thisDay });
			dayFolder.append(dayHeader);

			dayFolder.addListener('click', (e) => {
				if (e.target.closest('.day')) {
					renderContentTasks(days[day], taskList);
				}
			})

			for (let task of days[day]) {
				const taskFolder = new Elem({ 
					tag: 'div',
					selectors: 'taskFolder', content: `
					<span data-id="${task.id}">${task.title}</span>
					<button class="editTaskBtn">⚙️</button>
				`});

				const btn = taskFolder.DOMElement.querySelector('.editTaskBtn');
				btn.addEventListener('click', (e) => {
					toggleTaskCreator(e);
					renderPreview(task.id, taskList);
				})
				dayFolder.append(taskFolder);
			}
			monthFolder.append(dayFolder);
		}
		container.append(monthFolder.DOMElement);
	}
}

export {
	buildFolders,
}