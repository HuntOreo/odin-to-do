import Task from '../Task_Class';

const getTasksFromCookies = (taskList) => {
  let newTaskList = [];

  const existingUserTasks = findCookie('userTasks');

  if (!existingUserTasks) {
    // create cookie if none exists, store default data.
    newTaskList = [
      new Task({
        title: 'Task!',
        content: 'My Task',
        date: {
          day: undefined,
          month: undefined,
          year: 2025,
        },
      }),
      new Task({
        title: 'Task 2!',
        content: 'My other Task',
        date: {
          day: 12,
          month: '2',
          year: 2025,
        },
      }),
      new Task({
        title: 'IDK',
        content: 'My Task',
        date: {
          day: 2,
          month: '2',
          year: 2025,
        },
      }),
      new Task({
        title: 'Yippee',
        content: 'My Task',
        date: {
          day: 2,
          month: '12',
          year: 2025,
        },
      }),
    ];

    document.cookie = `userTasks=${JSON.stringify(taskList)}`;
  } else {
    const cookieName = 'userTasks=';
    const tasksJSON = existingUserTasks.slice(cookieName.length);
    const tasksArr = JSON.parse(tasksJSON);
    for (let task of tasksArr) {
      const temp = new Task({
        content: task.content,
        date: task.date,
        id: task.id,
        title: task.title,
        complete: task._complete,
        priority: task._priority,
        color: task._color,
      })
      newTaskList.push(temp);
    }
  }
  return newTaskList;
}

const getAppStateFromCookies = (appStateHolder) => {
  const existingAppState = findCookie('appState');
  if (!existingAppState) {
    updateCookie('appState', appStateHolder);
    return appStateHolder;
  } else {
    const cookieName = 'appState=';
    const stateJSON = existingAppState.slice(cookieName.length);
    const stateObj = JSON.parse(stateJSON);

    return stateObj;
  }
}

const updateCookie = (cookieName, data) => {
  document.cookie = `${cookieName}=${JSON.stringify(data)}`;
}

const findCookie = (cookieName) => {
  const cookies = document.cookie.split('; ');
  const cookie = cookies.find(cookie => {
    if (cookie.startsWith(`${cookieName}=`)) {
      return true;
    }
  });

  return cookie;
}


export {
  getTasksFromCookies,
  getAppStateFromCookies,
  updateCookie
};