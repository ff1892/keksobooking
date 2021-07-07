import './form-validation.js';
import { renderMap, renderPinGroup } from './map.js';
import { getData } from './api.js';
import { setAdFormSubmit } from './form-data-send.js';
import { checkFilterChange } from './filters.js';

renderMap();

getData((adList) => {
  renderPinGroup(adList);
  checkFilterChange(() => renderPinGroup(adList));
});

setAdFormSubmit();
