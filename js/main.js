import {getAd} from './data.js';
import {generateCard} from './card.js';

const cardData = getAd();

const canvas = document.querySelector('#map-canvas');
canvas.appendChild(generateCard(cardData));
