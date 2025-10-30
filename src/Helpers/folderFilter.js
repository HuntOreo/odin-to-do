const getMonths = (taskList) => {
  const months = {}; // collect months

  for (let child of taskList) {
    // if a task is marked as complete, create the 'complete' folder.
    if ( child.complete === true ) {
      months.complete = [];
    } else if (!child.date.day || !child.date.month) {
      // If a task is missing assigned days or months, build a 'misc' folder
      months.misc = [];
    } else {
      // if a task has a specific month, build a folder for that month
      months[child.date.month] = [];
    }
  }

  // After month folders a documented, 
  // Check for each child that matches the month or 'misc' folder
  for (let month in months) {
    for (let child of taskList) {
      if (child.complete === true) {
        if (!months.complete.includes(child)) {
          months.complete.push(child);
        }
        
      } else if (month == child.date.month) {
        months[month].push(child);
      }
    }
  }

  // any task without an assigned date is passed to the misc folder
  taskList.forEach(child => {
    if (child.complete === true) {
      months.complete.push;
    } else if (!child.date.day || !child.date.month) {
      months.misc.push(child);
    }
  })

  return months;
}

const getDays = (month) => {
  // grab days from month
  const days = {}
  for (let task of month) {
    days[task.date.day] = month.filter(child => {
      return child.date.day == task.date.day;
    })
  }
  return days;
}

export {
  getMonths,
  getDays
}