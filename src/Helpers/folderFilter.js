const buildParents = (taskList) => {
  const folders = []; // Collect folders

  for (let child of taskList) {
    const isComplete = child.complete;
    const hasDate = Boolean(child.date.day  || child.date.month);

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

const buildChildren = (parent, children) => {
  const finalTree = [];
  if (parent === 'month') {
    const foldersSet = new Set(children.map(item => item.date.day));
    
    for (let day of foldersSet) {
      const filtered = children.filter(task => task.date.day === day);
      finalTree.push({
        day,
        tasks: filtered,
      });
    }
  } else {
    finalTree.push({
      day: parent,
      tasks: children,
    });
  }

  return finalTree;

}

export {
  buildParents,
  buildChildren
}