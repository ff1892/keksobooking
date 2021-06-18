import {HOUSING_TYPES_RUSSIAN} from './variables.js';
import {getCorrectGuestsWord, getCorrectRoomsWord} from './util.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const generateCard = ({author, offer}) => {
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.popup__avatar').src = author.avatar;

  card.querySelector('.popup__title').textContent = offer.title;
  card.querySelector('.popup__text--address').textContent = offer.address;
  card.querySelector('.popup__text--price').textContent = `${ offer.price } ₽/ночь`;
  card.querySelector('.popup__type').textContent = HOUSING_TYPES_RUSSIAN[offer.type];
  card.querySelector('.popup__text--capacity').textContent = `${ offer.rooms } ${ getCorrectRoomsWord(offer.rooms) } для
  ${ offer.guests } ${ getCorrectGuestsWord(offer.guests) }`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${ offer.checkin }, выезд до ${ offer.checkout }`;

  const modifiers = offer.features.map((feature) => `popup__feature--${ feature }`);
  const featuresItems = card.querySelectorAll('.popup__feature');
  const featuresList = card.querySelector('.popup__features');
  featuresItems.forEach((item) => {
    const modifier = item.classList[1];
    if (! modifiers.includes(modifier)) {
      item.remove();
    }
  });
  if (card.querySelectorAll('.popup__feature').length === 0) {
    featuresList.style.display = 'none';
  }

  offer.description ? card.querySelector('.popup__description').textContent = offer.description :
    card.querySelector('.popup__description').textContent = 'Описание отсутствует';


  const photoTemplate = card.querySelector('.popup__photo');
  const photosList = card.querySelector('.popup__photos');
  const fragment = document.createDocumentFragment();
  offer.photos.map((src) => {
    const photo = photoTemplate.cloneNode(true);
    photo.src = src;
    fragment.appendChild(photo);
  });
  photosList.children[0].remove();
  photosList.appendChild(fragment);
  if (photosList.querySelectorAll('.popup__photo').length === 0) {
    photosList.style.display = 'none';
  }

  return card;
};

export {generateCard};
