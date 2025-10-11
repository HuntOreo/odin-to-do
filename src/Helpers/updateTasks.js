import Tasks from '../Components/Sidebar_Showing/Tasks';

const updateTasks = (task, taskList) => {
	const newTask = {
		date: task.date,
		title: task.title,
		id: task.id,
		content: task.content,
	}

	taskList.push(newTask);
	Tasks(taskList);
}

export {
	updateTasks
}