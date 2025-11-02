import { Container, Head, Elem } from "elekit";
import { DateTime } from "luxon";
import Content from '../Components/Content/Content';
import renderPreview from "./events/renderPreview";
import { buildParents, buildChildren } from './folderFilter';
import deleteTask from './events/deleteTask';
import completeTask from './events/completeTask';

const buildFolders = (taskList, container) => {
	const parentFolders = buildParents(taskList);
	const treeBlueprint = [];

	for (let folder of parentFolders) {
		const isMonth = Boolean(folder.name === 'month');
		const folderName = isMonth ? 
			DateTime.fromObject({month: folder.value}).toFormat('LLLL') : folder.name
		
		const children = buildChildren(folder.name, folder.tasks);
		treeBlueprint.push({
			name: folderName,
			weight: folder.weight,
			children,
		});
	}

	const organizedFolders = organizeFolders(treeBlueprint);

	renderTree(organizedFolders, taskList, container);
}

const renderTree = (treeArr, taskList, container) => {	
	for (let folder of treeArr) {
		const parentContainer = new Container('parent');
		const parentHeader = new Head({
			size: 2,
			content: folder.name,
		});

		parentContainer.append(parentHeader);

		for (let day of folder.children) {
			const dayContainer = new Container('day');
			if (folder.name !== 'Misc' && folder.name !== 'Complete') {	
				const dayHeader = new Head({
					size: 3,
					content: day.day,
				});
	
				dayContainer.append(dayHeader);
			}

			for (let task of day.tasks) {
				const taskFolder = new Elem({
					tag: 'div',
					selectors: 'taskFolder', content: `
					<span data-id="${task.id}">${task.title}</span>
					<button class="editTaskBtn">⚙️</button>
					<button class="deleteTaskBtn">🗑️</button>
					<button class="completeBtn">✅</button>
				`});

				handleTasks(task, taskFolder, taskList, day.tasks)
				dayContainer.append(taskFolder);
			}
			parentContainer.append(dayContainer);
		}
		container.append(parentContainer.DOMElement);
	}
}
 
const handleTasks= (task, taskFolder, taskList, days) => {
	// Render sibling tasks into view on click 
	taskFolder.addListener('click', () => Content(taskList, days))
	// grab that tasks edit btn and assign listener
	const editTaskBtn = taskFolder.DOMElement.querySelector('.editTaskBtn');
	editTaskBtn.addEventListener('click', (e) => {
		renderPreview(task.id, taskList);
	})
	const deleteTaskBtn = taskFolder.DOMElement.querySelector('.deleteTaskBtn');
	deleteTaskBtn.addEventListener('click', (e) => {
		deleteTask(task.id, taskList, days);
	})
	const completeBtn = taskFolder.DOMElement.querySelector('.completeBtn');
	completeBtn.addEventListener('click', (e) => {
		completeTask(task, taskList, days,);
	})
}

const organizeFolders = (folders) => {
	folders.sort((a, b) => {
		if (a.weight < b.weight ) {
			return -1
		} else if (a.weight > b.weight) {
			return 1
		}
	})

	return folders;
}

export {
	buildFolders,
}