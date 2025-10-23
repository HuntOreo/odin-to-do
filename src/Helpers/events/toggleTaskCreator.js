const toggleTaskCreator = (e, taskList) => {
	const target = e.target;
	const app = document.querySelector('.app');
	const taskCreator = app.querySelector('.task_creator');

	let isHidden;
	taskCreator.classList.contains('hideElem') ? isHidden = true : isHidden = false;
	
	if (isHidden) {
		if (
			target.classList.contains('open_preview') ||
			target.classList.contains('editTaskBtn')
		) {
			taskCreator.classList.toggle('hideElem');
		}
	} else {
		if (target.classList.contains('editTaskBtn')) {
			const card = target.closest('.taskCard');
			const targetedID = card.dataset.id;
			const targetedTask = taskList.filter(child => child.id = targetedID);
			console.log(targetedTask);
		}

		if(
			!target.closest('.task_creator') &&
			!target.classList.contains('open_sidebar') &&
			!target.closest('.taskFolder') && 
			!target.classList.contains('editTaskBtn')
		) {
			taskCreator.classList.add('hideElem');
		}
	}
}

export default toggleTaskCreator;