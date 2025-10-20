import { Container } from 'elekit';
import TaskForm from './TaskForm';
import Tasks from './Tasks';

const Sidebar_Showing = (taskList) => {
  const sidebar = document.querySelector('.sidebar_showing');
  if (sidebar) {
    sidebar.textContent = ''
    sidebar.append(TaskForm(taskList).DOMElement);
    sidebar.append(Tasks(taskList).DOMElement);
  } else {
    const container = new Container('sidebar_showing', { background: 'violet' });
    container.append([TaskForm(taskList), Tasks(taskList)]);
    return container;
  }
}

export default Sidebar_Showing;