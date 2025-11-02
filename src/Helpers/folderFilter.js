const buildParents = (taskList) => {
  const folders = []; // Collect folders
  for (let child of taskList) {
    const isComplete = child.complete;
    const isPriority = child.priority;
    const hasDate = Boolean(child.date.day  || child.date.month);

    if (isComplete) { // Check for any completed tasks.
      if (!folders.some(obj => obj.name === 'Complete')) {
        folders.push({
          name: 'Complete',
          weight: 14,
          tasks: [child],
        });
      } else {
        const index = folders.findIndex(child => child.name === 'Complete');
        folders[index].tasks.push(child);
      }
    } else if (isPriority) {
        if (!folders.some(obj => obj.name === 'Priority')) {
          folders.push({
            name: 'Priority',
            weight: 0,
            tasks: [child],
          });
        } else {
          const index = folders.findIndex(child => child.name === 'Priority');
          folders[index].tasks.push(child);
        }
    } else if (hasDate) { // Then check for any specified tasks.
      if (!folders.some(obj => obj.value === child.date.month)) {
        folders.push({
          name: 'month',
          value: child.date.month,
          weight: child.date.month,
          tasks: [child]
        });
      } else {
        const index = folders.findIndex(obj => obj.value === child.date.month);
        folders[index].tasks.push(child);
      }
    } else { // Otherwise, place in 'Misc' folder.
      if (!folders.some(obj => obj.name === 'Misc')) {
        folders.push({
          name: 'Misc',
          weight: 13,
          tasks: [child],
        });
      } else {
        const index = folders.findIndex(child => child.name === 'Misc');
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