import { showAlert } from './util.js';

const getData = (onSuccess) => {
  return fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(` ${ response.status } ${ response.statusText }`);
  })
  .then((json) => {
    onSuccess(json);
  })
  .catch((err) => {
    showAlert(`Не удалось загрузить данные. ${ err }`);
  })
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
  .then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail()
    }
  })
  .catch(() => {
    onFail();
  });
}

export { getData, sendData };




