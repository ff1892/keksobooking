import { sendData } from "./api.js";
import { showAlert } from "./util.js";

const adForm = document.querySelector('.ad-form');

const showAdFormSubmitOk = () => {
  showAlert('Данные успешно отправлены!', 'PaleGreen', 1400, 2500);
  adForm.reset();
};

const setAdFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => showAdFormSubmitOk(),
      () => showAlert('Ошибка отправки данных. Попробуйте ещё раз', 'red', 1400, 5000),
      new FormData(evt.target)
    );
  });
};

export {setAdFormSubmit};


