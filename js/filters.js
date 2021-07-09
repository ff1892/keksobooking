import { clearMarkers } from './map.js';

const ANY = 'any';
const MIN_PRICE = 10000;
const MAX_PRICE = 50000;

const PRICE_VALUES = {
  low: 'low',
  middle: 'middle',
  high: 'high',
};

const filterForm = document.querySelector('.map__filters');
const filterTypeInput = filterForm.querySelector('#housing-type');
const filterPriceInput = filterForm.querySelector('#housing-price');
const filterRoomsInput = filterForm.querySelector('#housing-rooms');
const filterGuestsInput = filterForm.querySelector('#housing-guests');
const filterFeaturesInputs = filterForm.querySelectorAll('.map__checkbox');

const checkFilterChange = (reRenderCallback) => {
  filterForm.addEventListener('change', () => {
    clearMarkers();
    reRenderCallback();
  });
  filterForm.addEventListener('reset', () => {
    clearMarkers();
    reRenderCallback();
  });
};

const checkFilterType = ({offer}) => filterTypeInput.value === ANY || offer.type === filterTypeInput.value;

const checkFilterPrice = ({offer}) => {
  switch (filterPriceInput.value) {
    case PRICE_VALUES.low:
      return offer.price < MIN_PRICE;
    case PRICE_VALUES.middle:
      return offer.price >= MIN_PRICE && offer.price <= MAX_PRICE;
    case PRICE_VALUES.high:
      return offer.price > MAX_PRICE;
    default:
      return true;
  }
};

const checkFilterRooms = ({offer}) => filterRoomsInput.value === ANY || offer.rooms === Number(filterRoomsInput.value);

const checkFilterGuests = ({offer}) => filterGuestsInput.value === ANY || offer.guests === Number(filterGuestsInput.value);

const checkFilterFeatures = ({offer}) => Array.from(filterFeaturesInputs)
  .every((filterFeature) => {
    if (!filterFeature.checked) {
      return true;
    }
    if (!offer.features) {
      return false;
    }
    return offer.features.includes(filterFeature.value);
  });

const getFilteredAdList = (adList) => {
  const filteredAdList = adList.filter((ad) => (
    checkFilterType(ad) &&
    checkFilterPrice(ad) &&
    checkFilterRooms(ad) &&
    checkFilterGuests(ad) &&
    checkFilterFeatures(ad)
  ));
  return filteredAdList;
};

export{ checkFilterChange, getFilteredAdList };


