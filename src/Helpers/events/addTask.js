import Task from "../../Task_Class";
import { updateTasks } from "../updateTasks";

const addTask = (taskList) => {
	const monthInput = document.querySelector('#sidebarMonth');
	const dayInput = document.querySelector('#sidebarDay');

	const task = new Task({
		date: {
			month: monthInput.value,
			day: dayInput.value,
		}
	});

	return updateTasks(task, taskList);
}

export {
	addTask,
}