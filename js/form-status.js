import { map, mainPinMarker, INITIAL_COORDINATES } from './map.js';
import { MinHousingPrice } from './form-validation.js';
import { deleteAvatarPreview, deletePhotoPreview } from './preview.js';
import { roomsResetHandler } from './form-validation.js';

const adForm = document.querySelector('.ad-form');
const adFormInputs = adForm.querySelectorAll('input');
const adHousingInput = adForm.querySelector('#type');
const initialHousingOption = adHousingInput.querySelector('option[selected]');
const adPriceInput = adForm.querySelector('#price');
const filterForm = document.querySelector('.map__filters');

const disableForm = (form) => {
  form.classList.add('ad-form--disabled');
  const formChildren = form.children;
  for (const child of formChildren) {
    child.setAttribute('disabled', true);
  }
};

const enableForm = (form) => {
  form.classList.remove('ad-form--disabled');
  const formChildren = form.children;
  for (const child of formChildren) {
    child.disabled = false;
  }
};

const formResetHandler = () => {
  mainPinMarker
    .setLatLng(L.latLng(
      INITIAL_COORDINATES.lat,
      INITIAL_COORDINATES.lng,
    ));
  map
    .setView({
      lat: INITIAL_COORDINATES.lat,
      lng: INITIAL_COORDINATES.lng,
    }, 12.5);
  adForm.reset();
  adFormInputs.forEach((input) => {
    input.style.outline = 'none';
  });
  roomsResetHandler();
  adPriceInput.placeholder = MinHousingPrice[initialHousingOption.value];
  deleteAvatarPreview();
  deletePhotoPreview();
  filterForm.reset();
};

const disableForms = () => {
  disableForm(adForm);
  disableForm(filterForm);
};

export { disableForms, enableForm, formResetHandler };
