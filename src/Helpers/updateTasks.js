import Task from '../Task_Class';
import Tasks from '../Components/Sidebar_Showing/Tasks';

const updateTasks = (task, taskList) => {
	const newTask = new Task({		
		date: task.date,
		title: task.title,
		id: task.id,
		content: task.content,
	})

	taskList.push(newTask);
	document.cookie = `userTasks=${JSON.stringify(taskList)}`;
	Tasks(taskList);

	return newTask;
}

export {
	updateTasks
}