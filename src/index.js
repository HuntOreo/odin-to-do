import './style.css';
import App from './App';

const body = document.querySelector('body');

const toggleSide = (event) => {
    const app = App().DOMElement;
    app.classList.toggle('showSidebar');
    app.classList.toggle('hideSidebar');
    console.log(app);
}

body.append(App().DOMElement);

export {
    toggleSide
}