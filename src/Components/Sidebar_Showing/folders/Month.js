import { Container, Head } from 'elekit';
import { DateTime } from 'luxon';

const Month = (task) => {
  const monthFormatted = DateTime.fromObject(task.date).toFormat('LLLL');
  const container = new Container({ selectors: [task.date.month, 'month'] });
  const h2 = new Head({
    size: 2,
    content: monthFormatted,
  })

  h2.DOMElement.dataset.month = task.date.month;

  container.append(h2);
  return container;
}

export default Month;