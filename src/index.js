import './style.css';
import App from './App';
import toggleTaskCreator from './Helpers/events/toggleTaskCreator';

const body = document.querySelector('body');

body.append(App().DOMElement);

const app = document.querySelector('.app');
app.addEventListener('click', (e) => {
  if (
    app.classList.contains('showingSidebar_withEditor') ||
    app.classList.contains('hiddenSidebar_withEditor')
  ) {
    toggleTaskCreator(e);
  }
})