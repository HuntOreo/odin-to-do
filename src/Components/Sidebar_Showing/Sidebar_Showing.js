import { Elem, Container, Input, Button } from 'elekit';
import TaskForm from './TaskForm';
import Tasks from './Tasks';

const Sidebar_Showing = (taskList) => {
  const container = new Container('sidebar_showing', { background: 'violet' });
  container.append([TaskForm(taskList), Tasks(taskList)]);
  return container;
}

export default Sidebar_Showing;