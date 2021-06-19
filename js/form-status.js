const adForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');

const makeFormDisabled = (form) => {
  form.classList.add('ad-form--disabled');
  const formChildren = form.children;
  for (const child of formChildren) {
    child.setAttribute('disabled', true);
  }
};

const makeFormEnabled = (form) => {
  form.classList.remove('ad-form--disabled');
  const formChildren = form.children;
  for (const child of formChildren) {
    child.disabled = false;
  }
};

export {adForm, filterForm};
export {makeFormDisabled, makeFormEnabled};
