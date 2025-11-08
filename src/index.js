import './style.css';
import App from './App';
import toggleTaskCreator from './Helpers/events/toggleTaskCreator';

const body = document.querySelector('body');
let taskList = [];
let appState = {
    quickSidebar: true,
    mainSidebar: false,
    content: null,
    editor: false
}

body.append(App(taskList, appState).DOMElement);

const app = document.querySelector('.app');
app.addEventListener('click', (e) => {
    toggleTaskCreator(e, taskList);
});