import { sendData } from './api.js';
import { showAlertSendData } from './alerts.js';

const adForm = document.querySelector('.ad-form');

const showAdFormSubmitSuccess = () => {
  showAlertSendData('success');
  adForm.reset();
};

const setAdFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => showAdFormSubmitSuccess(),
      () => showAlertSendData('error'),
      new FormData(evt.target),
    );
  });
};

export { setAdFormSubmit };


