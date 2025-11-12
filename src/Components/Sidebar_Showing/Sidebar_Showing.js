import { Container } from 'elekit';
import TaskForm from './TaskForm';
import Tasks from './Tasks';

const Sidebar_Showing = (taskList, appStateHolder) => {
  const sidebar = document.querySelector('.sidebar_showing');
  if (sidebar) {
    sidebar.textContent = ''
    sidebar.append(TaskForm(taskList).DOMElement);
    sidebar.append(Tasks(taskList, appStateHolder).DOMElement);
  } else {
    const container = new Container({
      selectors: ['sidebar_showing', 'hideElem']
    }, { background: 'violet' });
    container.append([TaskForm(taskList), Tasks(taskList, appStateHolder)]);
    return container;
  }
}

export default Sidebar_Showing;