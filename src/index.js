import './style.css';
import App from './App';
import toggleTaskCreator from './Helpers/events/toggleTaskCreator';

const body = document.querySelector('body');
let taskList = [];

body.append(App(taskList).DOMElement);

const app = document.querySelector('.app');
app.addEventListener('click', (e) => {
    toggleTaskCreator(e, taskList);
});