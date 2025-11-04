const getCard = (task) => {
  const content = document.querySelector('.content');
  const card = content.querySelector(`.taskCard[data-id="${task.id}"]`);

  return card;
}

export default getCard;