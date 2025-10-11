const toggleTaskCreator = (e) => {
	const app = document.querySelector('.app');
	const taskCreator = app.querySelector('.taskCreator');

	// If taskCreator is hidden (.hideElem), then show it.
	if (taskCreator.classList.contains('hideElem')) {
		taskCreator.classList.toggle('hideElem');
		if (
			app.classList.contains('hiddenSidebar_withEditor') ||
			app.classList.contains('hiddenSidebar_noEditor')
		) {
			app.classList.toggle('hiddenSidebar_withEditor');
			app.classList.toggle('hiddenSidebar_noEditor');
		}

		app.classList.toggle('showingSidebar_withEditor');
	} else {

		// If clicked outside bounds of task creator, close.
		//	UNLESS it is the editTaskBtn, taskCard
		if (!e.target.closest('.taskCreator') &&
			!e.target.classList.contains('editTaskBtn') &&
			!e.target.closest('.taskCard')) {

			// if task creator is open, 
			// check if an element is clicked outside of the container
			// and close the task creator if true
			if (app.classList.contains('hiddenSidebar_withEditor')) {
				app.classList.toggle('hiddenSidebar_withEditor');
				app.classList.toggle('hiddenSidebar_noEditor');
				taskCreator.classList.toggle('hideElem');

			} else if (app.classList.contains('showingSidebar_withEditor')) {
				app.classList.toggle('showingSidebar_withEditor');
				app.classList.toggle('showingSidebar_noEditor');
				taskCreator.classList.toggle('hideElem');

			}
		}
	}
}

export default toggleTaskCreator;