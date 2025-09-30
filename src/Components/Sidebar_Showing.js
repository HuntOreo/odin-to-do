import { Elem, Container, Input, Button } from 'elekit';
import TaskForm from './Sidebar_Showing/TaskForm';
import Tasks from './Sidebar_Showing/Tasks';

const Sidebar_Showing = (tasksArr) => {
  const container = new Container('sidebar_showing', { background: 'violet' });

  container.append([TaskForm(tasksArr), Tasks(tasksArr)]);
  return container;
}

export default Sidebar_Showing;