import { updateCookie } from "./handleCookies";

const updateAppState = (stateName, stateValue, appStateObj) => {
	appStateObj[stateName] = stateValue;
	updateCookie('appState', appStateObj);

	return appStateObj;
}

const applyAppState = ({stateName, stateValue}, app) => {
	switch(stateName) {
		case 'quickSidebar':
			const mainSidebar = app.querySelector('.sidebar_showing');
			const sidebarBtn = app.querySelector('.open_sidebar');
			const openPreviewBtn = app.querySelector('.open_preview');
			if (stateValue === true) {
				mainSidebar.classList.add('hideElem');
				sidebarBtn.textContent = '>';
				if (openPreviewBtn.classList.contains('hideElem')) {
					openPreviewBtn.classList.remove('hideElem');
				}
			} else {
				sidebarBtn.textContent = '<';
				openPreviewBtn.classList.add('hideElem');
				if (mainSidebar.classList.contains('hideElem')) {
					mainSidebar.classList.remove('hideElem');
				}
			}

			break;
		case 'mainSidebar':
		case 'editor':
		case 'content':
	}
}

export {
	updateAppState,
	applyAppState
}