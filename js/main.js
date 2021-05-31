'use strict';

const getRandomInt = function (minInt, maxInt) {
  if (minInt >= 0 && minInt > maxInt) {
    [minInt, maxInt] = [maxInt, minInt];
  }
  if (minInt >= 0 && minInt !== maxInt) {
    minInt = Math.ceil(minInt);
    maxInt = Math.floor(maxInt);
    return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
  }
  throw new Error('Некорректные аргументы');
};

getRandomInt();

const getRandomNumber = (minNumber, maxNumber, fractionNumber = 0) => {
  if (minNumber >= 0 && minNumber > maxNumber) {
    [minNumber, maxNumber] = [maxNumber, minNumber];
  }
  if (minNumber >= 0 && minNumber !== maxNumber) {
    minNumber = Math.ceil(minNumber * 10 ** fractionNumber);
    maxNumber = Math.floor ( maxNumber * 10 ** fractionNumber);
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    return randomNumber / 10 ** fractionNumber;
  }
  throw new Error('Некорректные аргументы');
};

getRandomNumber();
