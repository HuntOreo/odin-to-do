class Task {
  constructor({ title, content, date, color, priority }) {
    this.id = crypto.randomUUID();
    this.title = 'Untitled';
    this.complete = false;
    if (title) { this.title = title }
    if (content) { this.content = content };
    if (color) { this.color = color; }
    if (date) { this.date = { ...date }; }
    if (priority) { this.priority = priority; }
    if (complete) { this.complete = true; }
  }

  get complete() { return this.complete; }
  set complete(flag) { this.complete = flag; }
}

export default Task;