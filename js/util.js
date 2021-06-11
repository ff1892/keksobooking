const getRandomNumber = (minNumber, maxNumber, fractionNumber = 0) => {
  if (minNumber >= 0 && minNumber > maxNumber) {
    [minNumber, maxNumber] = [maxNumber, minNumber];
  }
  if (minNumber >= 0 && minNumber !== maxNumber && fractionNumber >= 0) {
    minNumber = Math.ceil(minNumber * 10 ** fractionNumber);
    maxNumber = Math.floor ( maxNumber * 10 ** fractionNumber);
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    return randomNumber / 10 ** fractionNumber;
  }
  throw new Error('Некорректные аргументы');
};

const getRandomArrayValue = (array) => array[getRandomNumber(0, array.length - 1)];

const getShuffledArray = (array) => {
  const shuffledArrayCopy = [...array];
  return shuffledArrayCopy.sort(() => getRandomNumber(0, 2) - 1);
};

const getRandomSlice = (array) => array.slice(0, getRandomNumber(0, array.length));

export {getRandomNumber, getRandomArrayValue, getShuffledArray, getRandomSlice};
