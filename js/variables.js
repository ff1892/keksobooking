const USERS_COUNT = 10;
const HOUSING_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const HOUSING_TYPES_RUSSIAN = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

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
  max: 15,
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

export {USERS_COUNT};
export {HOUSING_TYPES, HOUSING_TYPES_RUSSIAN, HOUSING_TITLES, HOUSING_DESCRIPTIONS, HOUSING_FEATURES};
export {PRICE, GUESTS, ROOMS, CHECKIN_LIST, CHECKOUT_LIST, PHOTOS, GALLERY_MAX};
export {LAT_MIN, LAT_MAX, LNG_MIN, LNG_MAX, LOCATION_PRECISION};
