import { updateCookie } from "../handleCookies";

const updatePriority = (e, task, taskList) => {
    task.priority = e.target.checked;
    const index = taskList.findIndex(child => child.id === task.id);
    taskList[index] = task;

    updateCookie('userTasks', taskList);
}

export default updatePriority