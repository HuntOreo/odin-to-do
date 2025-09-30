class Task {
  constructor({ content, date, color, priority }) {
    this.id = crypto.randomUUID();
    this.content = content;
    if (color) { this.color = color; }
    if (date) { this.date = { ...date }; }
    if (priority) { this.priority = priority; }
  }
}

export default Task;