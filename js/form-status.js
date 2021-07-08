import { map, mainPinMarker, TOKYO_CENTER } from './map.js';

const adForm = document.querySelector('.ad-form');
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

const resetForm = () => {
  mainPinMarker
    .setLatLng(L.latLng(
      TOKYO_CENTER.lat,
      TOKYO_CENTER.lng,
    ));
  map
    .setView({
      lat: TOKYO_CENTER.lat,
      lng: TOKYO_CENTER.lng,
    }, 12.5);
  adForm.reset();
  filterForm.reset();
};

export { adForm, filterForm };
export { disableForm, enableForm, resetForm };
