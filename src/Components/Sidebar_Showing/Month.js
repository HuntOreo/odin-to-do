import { Container, Head } from 'elekit';
import { DateTime } from 'luxon';

const Month = (task) => {
  const container = new Container({ selectors: [task.date.month, 'month'] });
  const h2 = new Head({
    size: 2,
    content: DateTime.fromObject(task.date.month).toFormat('LLLL')
  })

  container.append(h2);
  return container;
}

export default Month;