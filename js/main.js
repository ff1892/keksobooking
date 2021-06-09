const USERS_COUNT = 10;
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

const HOUSING_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

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

const getRandomArrayValue = (array) => array[getRandomNumber(0, array.length - 1)];

const getShuffledArray = (array) => {
  const shuffledArrayCopy = [...array];
  return shuffledArrayCopy.sort(() => getRandomNumber(0, 2) - 1);
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

const ad = () => {
  const {lat, lng} = getLocationKey();
  return {
    author: getAuthorKey(),
    location: {lat, lng},
    offer: getOfferKey(lat, lng),
  };
};

const adList = () => new Array(USERS_COUNT).fill(null).map(() => ad());

adList();
