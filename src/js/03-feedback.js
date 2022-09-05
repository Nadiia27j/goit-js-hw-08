let throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

populateInput();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
   e.preventDefault();
  formData[e.target.name] = e.target.value;

   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


function onFormSubmit(e) {
    e.preventDefault();
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parseMessage = JSON.parse(savedMessage);

    if (parseMessage) {
        console.log(parseMessage);
    }

    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}


function populateInput() {
 const savedMessage = localStorage.getItem(STORAGE_KEY);
 const parseMessage = JSON.parse(savedMessage);
 
 if (parseMessage) {
    formData = JSON.parse(parseMessage);
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}

