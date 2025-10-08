import Preview from "../../Components/Preview/Preview";
import Form from "../../Components/Preview/PreviewForm";

const toggleTaskEditor = (id, taskList) => {
  const task = taskList.filter(child => child.id == id)[0];
  const app = document.querySelector('.app');
  const taskCreator = app.querySelector('.taskCreator');
  
  app.classList.toggle('sidebar_taskCreator');
  taskCreator.classList.toggle('hideElem');
  Preview(task, taskList);
}

export default toggleTaskEditor;