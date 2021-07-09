import { disableForms } from './form-status.js';
import { debounce } from './util.js';
import { renderMap, renderPinGroup } from './map.js';
import { getData } from './api.js';
import { checkFilterChange } from './filters.js';
import { validateForm } from './form-validation.js';
import { setAdFormSubmit } from './form-data-send.js';

const initApp = () => {
  disableForms();

  renderMap(() => {
    getData((adList) => {
      renderPinGroup(adList);
      checkFilterChange(debounce(() => renderPinGroup(adList)));
    });
  });

  validateForm();
  setAdFormSubmit();
};

initApp();
