import { Container, Elem, Para } from "elekit";

const Task = function(content) {
    const container = new Container('task', { 
        maxHeight: '50px',
        background: 'hotpink',
        overflow: 'hidden',
        marginLeft: '10px'
    });
    const contentWrapper = new Container('wrapper');
    const text = new Para(content);

    contentWrapper.appendEl(text);
    container.appendEl(contentWrapper);

    return container;
}

export default Task;