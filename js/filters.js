import { filterForm } from './form-status.js';
import { clearMarkers } from './map.js';

const filterTypeInput = filterForm.querySelector('#housing-type');

const setTypeChange = (callback) => {
  filterTypeInput.addEventListener('change', (evt) => {
  clearMarkers();
  callback();
  });
};

const setFilterType = (ad) => {
  return(filterTypeInput.value === 'any' ? true : ad.offer.type === filterTypeInput.value);
}

export{ setTypeChange, setFilterType};


