import {adForm} from './form-status.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const MIN_PRICE = 0;

const adTitleInput = adForm.querySelector('#title');
const adPriceInput = adForm.querySelector('#price');

adTitleInput.addEventListener('input', () => {
  const valueLength = adTitleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Ещё ${ MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Удалите лишние ${ valueLength - MIN_TITLE_LENGTH} симв.`);
  } else {
    adTitleInput.setCustomValidity('');
  }
  adTitleInput.reportValidity();
});


adPriceInput.addEventListener('input', () => {
  const valuePrice = adPriceInput.value;

  if (valuePrice > MAX_PRICE) {
    adPriceInput.setCustomValidity(`Слишком дорого. Максимум ${MAX_PRICE} ₽/ночь`);
  } else if (valuePrice < MIN_PRICE) {
    adPriceInput.setCustomValidity(`Вы ничего не должны платить гостям. Минимальная цена: ${MIN_PRICE} ₽/ночь`);
  } else {
    adPriceInput.setCustomValidity('');
  }
  adPriceInput.reportValidity();
});

const adRoomsInput = adForm.querySelector('#room_number');
const adGuestsInput = adForm.querySelector('#capacity');

const getRoomsGuestsValidity = (roomsInput, guestsInput, messageValidity) => {
  const adRoomsNumber = parseInt(roomsInput.value, 10);
  const adGuestsNumber = parseInt(guestsInput.value, 10);
  if (adRoomsNumber === 100 && adGuestsNumber !== 0 || adRoomsNumber !== 100 && adGuestsNumber === 0) {
    adGuestsInput.setCustomValidity(messageValidity);
  } else if (adRoomsNumber !== 100 && adGuestsNumber !==0 && adRoomsNumber < adGuestsNumber) {
    adGuestsInput.setCustomValidity('Количество гостей не может превышать количество комнат');
  } else {
    adGuestsInput.setCustomValidity('');
  }
  adGuestsInput.reportValidity();
};

adRoomsInput.addEventListener('change', () => {
  getRoomsGuestsValidity(adRoomsInput, adGuestsInput, '100 комнат не для гостей');
});

adGuestsInput.addEventListener('change', () => {
  getRoomsGuestsValidity(adRoomsInput, adGuestsInput, 'не для гостей доступно только 100 комнат');
});
