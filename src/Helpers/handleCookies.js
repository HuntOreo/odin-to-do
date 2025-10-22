const handleCookies = (taskList) => {
  const cookies = document.cookie.split('; ');

  // find cookie storing tasks
  const userTasksExist = cookies.find(cookie => cookie.startsWith('userTasks='));
  if (!userTasksExist) {

    // create cookie if none exists, store default data.
    taskList = [
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
    const tasksString = userTasksExist.slice(cookieName.length);
    const tasksArr = JSON.parse(tasksString);
    taskList = [...tasksArr];
  }
}

export default handleCookies;