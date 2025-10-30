class Task {
  constructor({ title, content, date, color, priority, complete, id }) {
    id ? this.id = id : this.id = crypto.randomUUID();
    this.title = 'Untitled';
    this.complete = false;
    if (title) { this.title = title }
    if (content) { this.content = content };
    if (date) { this.date = { ...date }; }
    if (priority) { this.priority = priority; }
    color ? this._color = color : this._color = '#FFF';
    complete ? this._complete = true : this._complete = false;
  }

  get complete() { return this._complete; }
  set complete(flag) { this._complete = flag; }
}

export default Task;