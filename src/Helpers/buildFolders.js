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
			children,
		});
	}

	renderTree(treeBlueprint);
}

const renderTree = (treeArr) => {
	console.log(treeArr);

}

// const handleTasks = (task, taskList, days, dayFolder) => {
// 	// create a new task in the tree
// 	const taskFolder = new Elem({
// 		tag: 'div',
// 		selectors: 'taskFolder', content: `
// 		<span data-id="${task.id}">${task.title}</span>
// 		<button class="editTaskBtn">⚙️</button>
// 		<button class="deleteTaskBtn">🗑️</button>
// 		<button class="completeBtn">✅</button>
// 		`});
// 	// grab that tasks edit btn and assign listener
// 	const editTaskBtn = taskFolder.DOMElement.querySelector('.editTaskBtn');
// 	editTaskBtn.addEventListener('click', (e) => {
// 		renderPreview(task.id, taskList);
// 	})
// 	const deleteTaskBtn = taskFolder.DOMElement.querySelector('.deleteTaskBtn');
// 	deleteTaskBtn.addEventListener('click', (e) => {
// 		deleteTask(task.id, taskList, days);
// 	})
// 	const completeBtn = taskFolder.DOMElement.querySelector('.completeBtn');
// 	completeBtn.addEventListener('click', (e) => {
// 		completeTask(task, taskList, days,);
// 	})
// 	dayFolder.append(taskFolder);
// }

export {
	buildFolders,
}