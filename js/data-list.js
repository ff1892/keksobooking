import {USERS_COUNT} from './variables.js';
import {getAd} from './data.js';

const getAdList = () => new Array(USERS_COUNT).fill(null).map(() => getAd());

export {getAdList};
