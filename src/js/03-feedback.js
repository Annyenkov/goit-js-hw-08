import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea')
}
const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

saveData();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY)
}

function onInput(evt) {
  const formData = {
    email: 'email',
    message: 'message',
  }
  formData.email = refs.email.value;
  formData.message = refs.textarea.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function saveData(evt) {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveData) {
    refs.email.value = saveData.email
    refs.textarea.value = saveData.message;
  }
}

