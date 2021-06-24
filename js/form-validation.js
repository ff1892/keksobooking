import {adForm} from './form-status.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
let MIN_PRICE = 1000;

const adTitleInput = adForm.querySelector('#title');
const adPriceInput = adForm.querySelector('#price');
const adRoomsInput = adForm.querySelector('#room_number');
const adGuestsInput = adForm.querySelector('#capacity');
const adGuestsOptions = adGuestsInput.querySelectorAll('option');
const adHousingInput = adForm.querySelector('#type');
const adCheckInInput = adForm.querySelector('#timein');
const adCheckOutInput = adForm.querySelector('#timeout');

const RoomsValue = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const MinHousingPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const onTitleInput = () => {
  const valueLength = adTitleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Ещё ${ MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Удалите лишние ${ valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    adTitleInput.setCustomValidity('');
  }
  adTitleInput.reportValidity();
};

const onPriceInput = () => {
  const valueInput = adPriceInput.value;
  if (valueInput > MAX_PRICE) {
    adPriceInput.setCustomValidity(`Введите меньшее число. Максимум ${ MAX_PRICE }.`);
  } else if (valueInput < MIN_PRICE) {
    adPriceInput.setCustomValidity(`Введите большее число. Минимум: ${ MIN_PRICE }`);
  } else {
    adPriceInput.setCustomValidity('');
  }
  adPriceInput.reportValidity();
};

const disableAllNotSelected = (list) => {
  for (const option of list) {
    if (option.selected === false) {
      option.disabled = true;
    }
  }
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

const onHousingChange = (evt) => {
  adPriceInput.value = '';
  const currentMin = MinHousingPrice[evt.target.value];
  adPriceInput.placeholder = currentMin;
  MIN_PRICE = currentMin;
};

const onChekInChange = (evt) => {
  adCheckOutInput.value = evt.target.value;
};

const onChekOutChange = (evt) => {
  adCheckInInput.value = evt.target.value;
};


adTitleInput.addEventListener('input', onTitleInput);
adPriceInput.addEventListener('input', onPriceInput);
disableAllNotSelected(adGuestsOptions);
adRoomsInput.addEventListener('change', onRoomsChange);
adHousingInput.addEventListener('change', onHousingChange);
adCheckInInput.addEventListener('change', onChekInChange);
adCheckOutInput.addEventListener('change', onChekOutChange);
