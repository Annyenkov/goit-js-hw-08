import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea')
}
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

saveData();

function onFormSubmit(evt) {
  evt.preventDefault();
  if (refs.email.value === '' || refs.message.value === '') {
    return alert('Всі поля повинні бути заповнені.');
  } 
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY)
}

function onInput(evt) {
  const formData = {
     email: '',
     message: '',
   }
   formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function saveData() {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveData) {
    refs.email.value = saveData.email
    refs.message.value = saveData.message;
  }
}

