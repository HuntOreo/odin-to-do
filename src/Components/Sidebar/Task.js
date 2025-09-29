import { Container } from "elekit";

class Task {
	constructor({ date, content }) {
		this.id = crypto.randomUUID();
		this._date = {
			day: date.day,
			month: date.month,
			year: date.year,
		}
		this._content = `
				<p>${content}</p>
		`;
		const container = new Container('container');
		container.DOMElement.innerHTML = this._content;
		this._DOMElement = container.DOMElement;
	}

	get content() { return this._content; }
	get DOMElement() { return this._DOMElement; }
	get color() { return this._color };
	get date() { return this._date };

	set color(colorArg) { this._color = colorArg; }
}

export default Task;