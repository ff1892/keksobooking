import { isEscapeEvent } from './util.js';

const showAlertGetDataError = (message, alertTime = 5000) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '25px 10px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.color = 'white';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, alertTime);
};

const showAlertSendData = (status) => {
  const messageTemplate = document.querySelector(`#${ status }`).content.querySelector(`.${ status }`);
  const message = messageTemplate.cloneNode(true);
  document.body.appendChild(message);

  if (status === 'error') {
    const errorButton = message.querySelector('.error__button');
    errorButton.focus();
  }

  const onMessageEscapeKeyDown = (deleteListenersCallback) => (evt) => {
    if (isEscapeEvent(evt)) {
      evt.preventDefault();
      message.remove();
      deleteListenersCallback();
    }
  };

  const onMessageClick = (deleteListenersCallback) => () => {
    message.remove();
    deleteListenersCallback();
  };

  const deleteListeners = () => {
    message.removeEventListener('click', onMessageClick);
    document.removeEventListener('keydown', onMessageEscapeKeyDown);
  };

  document.addEventListener('keydown', onMessageEscapeKeyDown(deleteListeners));
  message.addEventListener('click', onMessageClick(deleteListeners));
};

export { showAlertGetDataError, showAlertSendData };
