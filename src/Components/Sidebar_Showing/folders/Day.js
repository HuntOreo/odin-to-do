import { Container, Head } from 'elekit';

const Day = (task) => {
  const container = new Container('day');
  const h3 = new Head({
    size: 3,
    content: task.day
  })

  h3.DOMElement.dataset.day = task.date.day

  container.append(h3);
  return container;
}

export default Day;