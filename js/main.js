// Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomInt = function (minNumber, maxNumber) {
  if (minNumber >= 0 && minNumber > maxNumber) {
    [minNumber, maxNumber] = [maxNumber, minNumber];
  }
  const isIntegerMin = !(minNumber - Math.floor(minNumber));
  if (minNumber >= 0 && (Math.floor(minNumber) - Math.floor(maxNumber) !== 0 || isIntegerMin)) {
    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  }
  throw new Error('Некорректные аргументы');
};

getRandomInt();

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

const getRandomFloat = function (minFloat, maxFloat, fractionNumber) {
  if (minFloat >= 0 && minFloat > maxFloat) {
    [minFloat, maxFloat] = [maxFloat, minFloat];
  }
  if (minFloat >=0 && minFloat !== maxFloat) {
    const randomFloat = Math.random() * (maxFloat - minFloat) + minFloat;
    return +randomFloat.toFixed(fractionNumber);
  }
  throw new Error('Некорректные аргументы');
};

getRandomFloat();

/*

?? Вопрос ??

Так как Math.random() задает число от 0 до 1, и при этом само число 1 не включается в диапазон,
получается, что в функции getRandomFloat ну никак не может оказаться само число maxFloat, а по условию
такая вероятность должна быть, хотя она и небольшая.

Увидел такую вспомогательную функцию:

// Generates values from <0, 1>

function randomizeValue() {
	var value = (1 + 10E-16) * Math.random();

  	if (value > 1.0) {
    	return 1.0;
    }

  	return value;
}

Стоит ли её использовать здесь?

*/
