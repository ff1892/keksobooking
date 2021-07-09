import { validateForm } from './form-validation.js';
import { debounce } from './util.js';
import { renderMap, renderPinGroup } from './map.js';
import { getData } from './api.js';
import { setAdFormSubmit } from './form-data-send.js';
import { checkFilterChange } from './filters.js';
import './form-validation.js';

const initApp = () => {
  renderMap();

  getData((adList) => {
    renderPinGroup(adList);
    checkFilterChange(debounce(() => renderPinGroup(adList)));
  });

  validateForm();
  setAdFormSubmit();
};

initApp();
