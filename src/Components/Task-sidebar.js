import { Container, Elem, Para } from "elekit";

const Task = function(content) {
    const container = new Container('task', { 
        maxHeight: '50px',
        background: 'hotpink',
        overflow: 'hidden'
    });
    const contentWrapper = new Container('wrapper');
    const text = new Para(content);
    
    // const dateInput = new Elem({ tag: 'input' });
    // const dateInputEl = dateInput.DOMElement;
    // dateInputEl.setAttribute('type', 'date');
    // dateInputEl.setAttribute('name', 'date');
    // dateInputEl.addEventListener('change', 
    //     () => formatTaskDate(dateInput.id, dateInputEl.value));
    
    contentWrapper.appendEl(text);
    // contentWrapper.appendEl([text, dateInput]);
    container.appendEl(contentWrapper);

    return container;
}

export default Task;