import Preview from "../../Components/Preview/Preview";

const renderPreview = (id, taskList, appStateHolder) => {
  let task;
  if (id === undefined) {
    task = taskList[0];
  } else {
    task = taskList.filter(child => child.id == id)[0];
  }
  Preview(task, taskList, appStateHolder);
}

export default renderPreview;