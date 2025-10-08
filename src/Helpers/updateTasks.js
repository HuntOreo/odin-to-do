import Tasks from '../Components/Sidebar_Showing/Tasks';

const updateTasks = (task, taskList) => {
	taskList.push(task);

	Tasks(taskList);
}

export {
	updateTasks
}