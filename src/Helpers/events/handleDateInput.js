import { DateTime } from "luxon";

const openDateInput = (container) => {
	const dateInput = container.querySelector('.hiddenDateInput');
	dateInput.showPicker();
}

const updateDate = (event) => {
	const value = event.target.value;
	const date = DateTime.fromSQL(value);

	const monthInput = document.querySelector('#sidebarMonth');
	const dayInput = document.querySelector('#sidebarDay');

	monthInput.value = date.month;
	dayInput.value = date.day;
}

export {
	openDateInput,
	updateDate
}

