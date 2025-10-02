import { Elem, Container, Input, Button } from 'elekit';
import TaskForm from './Sidebar_Showing/TaskForm';
import Tasks from './Sidebar_Showing/Tasks';

const Sidebar_Showing = (taskList) => {
  const container = new Container('sidebar_showing', { background: 'violet' });
console.log(Tasks(taskList))
  container.append([TaskForm(taskList), Tasks(taskList)]);
  return container;
}

export default Sidebar_Showing;