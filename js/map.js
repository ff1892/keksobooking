import { disableForm, enableForm } from './form-status.js';
import { generateCard as createCustomPopup } from './card.js';
import { getFilteredAdList } from './filters.js';

const TOKYO_CENTER = {
  lat: 35.66565,
  lng: 139.76102,
};

const adForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');

const map = L.map('map-canvas');
let mainPinMarker;
let markerGroup;

const renderMap = () => {
  const adressInput = adForm.querySelector('#address');

  disableForm(filterForm);
  disableForm(adForm);

  map
    .on('load', () => {
      enableForm(filterForm);
      enableForm(adForm);
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

  mainPinMarker = L.marker(
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
};


const renderPinGroup = (adList) => {
  markerGroup = L.layerGroup().addTo(map);
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

  const adListFiltered = getFilteredAdList(adList.slice());

  adListFiltered
    .slice(0, 10)
    .map((ad) => createMarker(ad));
};

const clearMarkers = () => {
  markerGroup.clearLayers();
};

export { renderMap, renderPinGroup, clearMarkers};
export { map, mainPinMarker, TOKYO_CENTER };
