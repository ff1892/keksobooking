import './form-validation.js';
import { renderMap, renderPinGroup } from './map.js';
import { getData } from './api.js';
import { setAdFormSubmit } from './form-data-send.js';
import { setTypeChange } from './filters.js';

renderMap();

getData(
  renderPinGroup, // отрисовываем полученные метки
  setTypeChange(() => renderPinGroup), // при изменении типа жилья: удаляем текущие ветки, рисуем заново отфильтрованные
  );

setAdFormSubmit();
