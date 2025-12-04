import Task from '../Task_Class';
import Tasks from '../Components/Sidebar_Showing/Tasks';
import { updateCookie } from './handleCookies';

const updateTasks = (task, taskList, appStateHolder) => {
	const newTask = new Task({
		date: task.date,
		title: task.title,
		id: task.id,
		content: task.content,
	})

	taskList.push(newTask);
	updateCookie('userTasks', taskList);
	Tasks(taskList, appStateHolder);

	return newTask;
}

export {
	updateTasks
}