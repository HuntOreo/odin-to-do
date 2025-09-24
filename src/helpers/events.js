import App from "../App";

const toggleSide = (event) => {
    const app = document.querySelector('.app');
    app.classList.toggle('showSidebar');
    app.classList.toggle('hideSidebar');
    console.log(app);
}

export {
    toggleSide,
}