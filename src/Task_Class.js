class Task {
  constructor({ title, content, date, color, priority, complete, id }) {
    id ? this.id = id : this.id = crypto.randomUUID();
    this.title = 'Untitled';
    this.complete = false;
    if (title) { this.title = title }
    if (content) { this.content = content };
    if (date) { this.date = { ...date }; }
    priority ? this._priority = true : this._priority = false;
    color ? this._color = color : this._color = '#FFF';
    complete ? this._complete = true : this._complete = false;
  }

  get complete() { return this._complete; }
  set complete(flag) { this._complete = flag; }

  get priority() { return this._priority; }
  set priority(flag) { this._priority = flag; }
}

export default Task;