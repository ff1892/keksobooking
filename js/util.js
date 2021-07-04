const getCorrectGuestsWord = (guestsNumber) => {
  if (guestsNumber % 10 === 1 && guestsNumber !== 11) {
    return 'гостя';
  }
  return 'гостей';
};

const getCorrectRoomsWord = (roomsNumber) => {
  switch (roomsNumber % 100) {
    case 11:
    case 12:
    case 13:
    case 14:
      return 'комнат';
  }
  switch (roomsNumber % 10) {
    case 1:
      return 'комната';
    case 2:
    case 3:
    case 4:
      return 'комнаты';
    default:
      return 'комнат';
  }
};

const showAlert = (message, alertColor = 'red', alertTop = 0, alertTime = 5000) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = `${ alertTop }px`;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '25px 10px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.color = 'white';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = alertColor;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, alertTime);
}

export {getCorrectGuestsWord, getCorrectRoomsWord, showAlert};
