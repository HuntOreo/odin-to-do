class Task {
  constructor({ title, content, date, color, priority }) {
    this.id = crypto.randomUUID();
    this.title = 'Untitled';
    if (title) { this.title = title }
    if (content) { this.content = content };
    if (color) { this.color = color; }
    if (date) { this.date = { ...date }; }
    if (priority) { this.priority = priority; }
  }
}

export default Task;