import { Container, Head, Elem } from "elekit";
import { DateTime } from "luxon";
import renderContentTasks from './events/renderContentTasks'
import renderPreview from "./events/renderPreview";
import toggleTaskCreator from "./events/toggleTaskCreator";

const buildFolders = (taskList, container) => {
	const months = getMonths(taskList);

	for (let month in months) {
		let monthFormatted;
		const thisMonth = months[month];
		
		if(month != 'misc') {
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

const getMonths = (taskList) => {
	const months = {}; // collect months

	for (let child of taskList) {
		// If a task is missing assigned days or months, build a 'misc' folder
		if (!child.date.day || !child.date.month) {
			months.misc = [] 
		} else {
			// if a task has a specific month, build a folder for that month
			months[child.date.month] = []
		}
	}

	// After month folders a documented, 
	// Check for each child that matches the month or 'misc' folder
	for (let month in months) {
		for (let child of taskList) {
			if (month == child.date.month) {
				months[month].push(child)
			}
		}
	}

	// any task without an assigned date is passed to the misc folder
	taskList.forEach(child => {
		if (!child.date.day || !child.date.month ) {
			months.misc.push(child);
		}
	})

	return months
}

const getDays = (month) => {
	// grab days from month
	const days = {}
	for (let task of month) {
		days[task.date.day] = month.filter(child => {
			return child.date.day == task.date.day;
		})
	}
	return days;
}

const createDayFolders = (monthFolder, month, taskList) => {
	const days = getDays(month);

	for (let day in days) {
		let thisDay;
		// if no date is provided, leave header blank.
		if(!month) {
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
				renderContentTasks(days[day], taskList);
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