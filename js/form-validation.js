import {adForm} from './form-status.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const MIN_PRICE = 0;

const adTitleInput = adForm.querySelector('#title');
const adPriceInput = adForm.querySelector('#price');
const adRoomsInput = adForm.querySelector('#room_number');
const adGuestsInput = adForm.querySelector('#capacity');
const adGuestsOptions = adGuestsInput.querySelectorAll('option');

const RoomsValue = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const validateInputLength = (input, minLenght, maxLength) => {
  const valueLength = input.value.length;
  if (valueLength < minLenght) {
    input.setCustomValidity(`Ещё ${ minLenght - valueLength } симв.`);
  } else if (valueLength > maxLength) {
    input.setCustomValidity(`Удалите лишние ${ valueLength - maxLength } симв.`);
  } else {
    input.setCustomValidity('');
  }
  input.reportValidity();
};

const validateInputNumber = (input, minNumber, maxNumber) => {
  const valueInput = input.value;
  if (valueInput > maxNumber) {
    input.setCustomValidity(`Введите меньшее число. Максимум ${ maxNumber }.`);
  } else if (valueInput < minNumber) {
    input.setCustomValidity(`Введите большее число. Минимум: ${ minNumber }`);
  } else {
    input.setCustomValidity('');
  }
  input.reportValidity();
};

const onRoomsChange = (evt) => {
  adGuestsOptions.forEach((option) => option.disabled = true);
  RoomsValue[evt.target.value].forEach((guestsPossible) => {
    adGuestsOptions.forEach((option) => {
      if (Number(option.value) === guestsPossible) {
        option.disabled = false;
        option.selected = true;
      }
    });
  });
};

const disableAllNotSelected = (list) => {
  for (const option of list) {
    if (option.selected === false) {
      option.disabled = true;
    }
  }
};

adTitleInput.addEventListener('input', validateInputLength(adTitleInput, MIN_TITLE_LENGTH, MAX_TITLE_LENGTH));
adPriceInput.addEventListener('input', validateInputNumber(adPriceInput, MIN_PRICE, MAX_PRICE));
disableAllNotSelected(adGuestsOptions);
adRoomsInput.addEventListener('change', onRoomsChange);
