import {adForm, filterForm, makeFormDisabled, makeFormEnabled} from './form-status.js';
import {getAdList} from './data-list.js';
import {generateCard as createCustomPopup} from './card.js';
import {TOKYO_CENTER} from './variables.js';

const adressInput = adForm.querySelector('#address');
const adList = getAdList();

makeFormDisabled(filterForm);
makeFormDisabled(adForm);

const map = L.map('map-canvas')
  .on('load', () => {
    makeFormEnabled(filterForm);
    makeFormEnabled(adForm);
  })
  .setView({
    lat: TOKYO_CENTER.lat,
    lng: TOKYO_CENTER.lng,
  }, 12.5);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: TOKYO_CENTER.lat,
    lng: TOKYO_CENTER.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const addressLat = evt.target.getLatLng().lat.toFixed(5);
  const addressLng = evt.target.getLatLng().lng.toFixed(5);
  adressInput.value = `${ addressLat } ${ addressLng }`;
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (ad) => {
  const {lat, lng} = ad.location;

  const pinIcon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const pinMarker = L.marker(
    {
      lat: lat,
      lng: lng,
    },
    {
      icon: pinIcon,
    },
  );

  pinMarker
    .addTo(markerGroup)
    .bindPopup(
      createCustomPopup(ad),
      {
        keepInView: true,
      },
    );
};

adList.map((ad) => createMarker(ad));
