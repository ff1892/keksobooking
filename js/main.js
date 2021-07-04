import './form-validation.js';
import { renderMap, renderPinGroup } from './map.js';
import { getData } from './api.js';
import {setAdFormSubmit} from './form-data-send.js';

renderMap();
getData(renderPinGroup);
setAdFormSubmit();
