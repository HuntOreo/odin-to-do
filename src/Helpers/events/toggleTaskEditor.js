import Preview from "../../Components/Preview/Preview";

const toggleTaskEditor = (id, taskList) => {
  let task;
  if (id === undefined) {
    task = taskList[0];
  } else {
    task = taskList.filter(child => child.id == id)[0];
  }
  const app = document.querySelector('.app');
  const taskCreator = app.querySelector('.taskCreator');

  taskCreator.classList.toggle('hideElem');

  if (
    app.classList.contains('hiddenSidebar_withEditor') || 
    app.classList.contains('hiddenSidebar_noEditor')) {
      app.classList.toggle('hiddenSidebar_withEditor');
      app.classList.toggle('hiddenSidebar_noEditor');
    }
  
  app.classList.toggle('showingSidebar_withEditor');
  Preview(task, taskList);
}

export default toggleTaskEditor;