import {USERS_COUNT} from './variables.js';
import {HOUSING_TYPES, HOUSING_TITLES, HOUSING_DESCRIPTIONS, HOUSING_FEATURES} from './variables.js';
import {PRICE, GUESTS, ROOMS, CHECKIN_LIST, CHECKOUT_LIST, PHOTOS, GALLERY_MAX} from './variables.js';
import {LAT_MIN, LAT_MAX, LNG_MIN, LNG_MAX, LOCATION_PRECISION} from './variables.js';

import {getRandomNumber, getRandomArrayValue, getShuffledArray, getRandomSlice} from './util.js';

const getAvatarsArray = () => {
  const avatars = new Array(USERS_COUNT).fill('');
  for (let i = 0; i < USERS_COUNT; i++) {
    let avatarIndex = i + 1;
    avatarIndex < 10 ? avatarIndex = `0${  (avatarIndex).toString()}` : (avatarIndex).toString();
    avatars[i] = `img/avatars/user${ avatarIndex  }.png`;
  }
  return avatars;
};

const avatarsList = getAvatarsArray();

const getAvatar = (array) => array.shift();

const getAuthorKey = () => ({
  avatar: getAvatar(avatarsList),
});

const getGalleryList = (array) => {
  const gallery = new Array(getRandomNumber(0, GALLERY_MAX)).fill(null);
  gallery.forEach((value, index) => {
    gallery[index] = getRandomArrayValue(array);
  });
  return gallery;
};

const getLocationKey = () => {
  const housingLat = getRandomNumber(LAT_MIN, LAT_MAX, LOCATION_PRECISION);
  const housingLng = getRandomNumber(LNG_MIN, LNG_MAX, LOCATION_PRECISION);
  return {
    lat: housingLat,
    lng: housingLng,
  };
};

const getOfferKey = (lat, lng) => {
  const housingType = getRandomArrayValue(HOUSING_TYPES);
  return {
    title: HOUSING_TITLES[housingType],
    address: [lat, lng],
    price: getRandomNumber(PRICE.min, PRICE.max),
    type: housingType,
    rooms: getRandomNumber(ROOMS.min, ROOMS.max),
    guests: getRandomNumber(GUESTS.min, GUESTS.max),
    checkin: getRandomArrayValue(CHECKIN_LIST),
    checkout: getRandomArrayValue(CHECKOUT_LIST),
    features: getRandomSlice(getShuffledArray(HOUSING_FEATURES)),
    description: HOUSING_DESCRIPTIONS[housingType],
    photos: getGalleryList(PHOTOS),
  };
};

const getAd = () => {
  const {lat, lng} = getLocationKey();
  return {
    author: getAuthorKey(),
    location: {lat, lng},
    offer: getOfferKey(lat, lng),
  };
};

export {getAd};
