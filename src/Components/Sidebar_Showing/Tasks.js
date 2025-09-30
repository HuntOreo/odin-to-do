import { Container, Head } from 'elekit';
import Month from './Month';

const Tasks = (tasksArr) => {
  const container = new Container('tasks', { background: 'yellow' });

  for (let task of tasksArr) {
    if (task.date) {
      const monthFolder = Month(task);
      container.append(monthFolder);
    }
  }

  return container;
}

export default Tasks;