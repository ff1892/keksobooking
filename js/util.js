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

const isEscapeEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export { getCorrectGuestsWord, getCorrectRoomsWord, isEscapeEvent };
