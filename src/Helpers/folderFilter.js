const buildParents = (taskList) => {
  const folders = []; // Collect folders

  for (let child of taskList) {
    const isComplete = child.complete;
    const hasDate = Boolean(child.date.day != "" || child.date.month != "");

    if (isComplete) { // Check for any completed tasks.
      if (!folders.some(obj => obj.name === 'complete')) {
        folders.push({
          name: 'complete',
          tasks: [child],
        });
      } else {
        const index = folders.findIndex(child => child.name === 'complete');
        folders[index].tasks.push(child);
      }
    } else if (hasDate) { // Then check for any specified tasks.
      if (!folders.some(obj => obj.value === child.date.month)) {
        folders.push({
          name: 'month',
          value: child.date.month,
          tasks: [child]
        });
      } else {
        const index = folders.findIndex(obj => obj.value === child.date.month);
        folders[index].tasks.push(child);
      }
    } else { // Otherwise, place in 'misc' folder.
      if (!folders.some(obj => obj.name === 'misc')) {
        folders.push({
          name: 'misc',
          tasks: [child],
        });
      } else {
        const index = folders.findIndex(child => child.name === 'misc');
        folders[index].tasks.push(child);
      }
    }
  }

  return folders;
}

const buildChildren = (month, monthName) => {

  // grab days from month

}

export {
  buildParents,
  buildChildren
}