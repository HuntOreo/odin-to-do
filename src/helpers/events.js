import Task from "../Components/Task-sidebar";

const toggleSide = (event) => {
    const app = document.querySelector('.app');
    app.classList.toggle('showSidebar');
    app.classList.toggle('hideSidebar');
    console.log(app);
}

const addTask = (event) => {
    const container = document.querySelector('.tasks');
    const newTask = Task('New Task!');
    container.append(newTask.DOMElement);
}

export {
    toggleSide,
    addTask
}