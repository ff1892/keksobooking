const getRandomInt = (minInt, maxInt) => {
  if (minInt >= 0 && minInt > maxInt) {
    [minInt, maxInt] = [maxInt, minInt];
  }
  if (minInt >= 0 && minInt !== maxInt) {
    minInt = Math.ceil(minInt);
    maxInt = Math.floor(maxInt);
    return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
  }
  throw new Error('Некорректные аргументы');
};

getRandomInt();

const getRandomNumber = (minNumber, maxNumber, fractionNumber = 0) => {
  if (minNumber >= 0 && minNumber > maxNumber) {
    [minNumber, maxNumber] = [maxNumber, minNumber];
  }
  if (minNumber >= 0 && minNumber !== maxNumber && fractionNumber >= 0) {
    minNumber = Math.ceil(minNumber * 10 ** fractionNumber);
    maxNumber = Math.floor ( maxNumber * 10 ** fractionNumber);
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    return randomNumber / 10 ** fractionNumber;
  }
  throw new Error('Некорректные аргументы');
};

getRandomNumber();


// MODULE 4 - TASK 1

const USERS_COUNT = 10;
const AVATARS_COUNT = 8;
const HOUSING_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const HOUSING_TITLES = {
  palace: 'Крутейший дворец',
  flat: 'Милейшая квартирка',
  house: 'Добротнейший дом',
  bungalow: 'Уютнейшее бунгало',
  hotel: 'Элитарнейший отель',
};

const HOUSING_DESCRIPTIONS = {
  palace: 'Замечательный вариант для царственных котов! Молочный погреб и аквадискотека!',
  flat: 'Как будто никуда и не уезжали: все как дома и даже лучше.',
  house: 'Для котов - крепких хозяйственников, соскучившихся по ловле мышей. ',
  bungalow: 'Назад к природе! Через три дня любой кот становится львом!',
  hotel: 'Роскошный отдых для обеспеченных котов: VIP-когтеточка включена. Меняем лоток каждый день!',
};

const FEATURES_LIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PRICE = {
  min: 1,
  max: 10000,
};

const GUESTS = {
  min: 1,
  max: 10,
};

const ROOMS = {
  min: 1,
  max: 10,
};

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const CHECKIN_LIST = ['12:00', '13:00', '14:00'];
const CHECKOUT_LIST = ['12:00', '13:00', '14:00'];

const LAT_MIN = 35.65;
const LAT_MAX = 35.7;
const LNG_MIN = 139.7;
const LNG_MAX = 139.8;
const LOCATION_PRECISION = 5;
const GALLERY_MAX = 10;

const getRandomArrayValue = (array) => array[getRandomNumber(0, array.length - 1)];

const getShuffledArrayCopy = (array) => {
  const shuffledArrayCopy = [...array];
  for (let i = shuffledArrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArrayCopy[i], shuffledArrayCopy[j]] = [shuffledArrayCopy[j], shuffledArrayCopy[i]];
  }
  return shuffledArrayCopy;
};

const getRandomSlice = (array) => array.slice(0, getRandomNumber(0, array.length));

const getGalleryList = (array) => {
  const gallery = new Array(getRandomNumber(0, GALLERY_MAX)).fill(null);
  gallery.forEach((value, index) => {
    gallery[index] = getRandomArrayValue(array);
  });
  return gallery;
};

const getAvatarsArray = () => {
  const avatars = new Array(USERS_COUNT).fill('img/avatars/unknown_racoon.png');
  for (let i = 0; i < AVATARS_COUNT; i++) {
    let avatarIndex = i + 1;
    avatarIndex < 10 ? avatarIndex = `0${  (avatarIndex).toString()}` : (avatarIndex).toString();
    avatars[i] = `img/avatars/user${ avatarIndex  }.png`;
  }
  return avatars;
};

const avatarsList = getShuffledArrayCopy(getAvatarsArray());

const getAvatar = (array) => array.shift();

const authorKey = () => ({
  avatar: getAvatar(avatarsList),
});

const locationKey = () => ({
  lat: getRandomNumber(LAT_MIN, LAT_MAX, LOCATION_PRECISION),
  lng: getRandomNumber(LNG_MIN, LNG_MAX, LOCATION_PRECISION),
});

const offerKey = () => {
  const housingType = getRandomArrayValue(HOUSING_TYPES);
  return {
    title: HOUSING_TITLES[housingType],
    address: [locationKey().lat, locationKey().lng],
    price: getRandomNumber(PRICE.min, PRICE.max),
    type: housingType,
    rooms: getRandomNumber(ROOMS.min, ROOMS.max),
    guests: getRandomNumber(GUESTS.min, GUESTS.max),
    checkin: getRandomArrayValue(CHECKIN_LIST),
    checkout: getRandomArrayValue(CHECKOUT_LIST),
    features: getRandomSlice(getShuffledArrayCopy(FEATURES_LIST)),
    description: HOUSING_DESCRIPTIONS[housingType],
    photos: getGalleryList(PHOTOS),
  };
};

const ad = () => ({
  author: authorKey(),
  offer: offerKey(),
  location: locationKey(),
});

const adList = () => new Array(USERS_COUNT).fill(null).map(() => ad());

adList();
