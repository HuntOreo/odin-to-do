import { Container, Head } from "elekit";
import { DateTime } from "luxon";

const buildFolders = (task, container) => {
    const taskMonth = task.date.month;
    const taskDay = task.date.day;
    let dayFolder, monthFolder;
    monthFolder = container.querySelector(`[data-month="${taskMonth}"]`); 
    
    if (monthFolder) {
        dayFolder = monthFolder.querySelector(`[data-day="${taskDay}"]`);

        if(dayFolder) {
            buildDay(task.title, taskDay, dayFolder, monthFolder, true);
        } else {
            dayFolder = new Container('day').DOMElement;
            buildDay(task.title, taskDay, dayFolder, monthFolder, false);
        }
    } else {
        monthFolder = new Container('month').DOMElement;
        const header = new Head({ 
            size: 2, 
            content: DateTime.fromObject(task.date).toFormat('LLLL'), 
        }).DOMElement
        monthFolder.dataset.month = taskMonth;
        monthFolder.append(header);
        buildDay(task.title, taskDay, new Container('day').DOMElement, monthFolder, false);
    }

    return monthFolder;
} 

function buildDay(title, date, day, month, exists) {
    if(exists) {
        day.innerHTML += taskEl;
    } else {
        day.innerHTML = `
            <h3>${date}</h3>
            ${title}
        `;
        day.dataset.day = date;
    }

    month.append(day);
}

export {
    buildFolders,
}