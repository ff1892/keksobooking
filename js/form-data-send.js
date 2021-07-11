import { sendData } from './api.js';
import { showAlertSendData } from './alerts.js';
import { formResetHandler } from './form-status.js';

const adForm = document.querySelector('.ad-form');

const showAdFormSubmitSuccess = () => {
  showAlertSendData('success');
  formResetHandler();
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


