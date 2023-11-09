import throttle from 'lodash.throttle';
const refs = {
  formElem: document.querySelector('.feedback-form'),
};

refs.formElem.addEventListener('input', throttle(onFormElemInput, 500));
refs.formElem.addEventListener('submit', onFormElemSubmit);

function onFormElemInput(elem) {
  elem.preventDefault();

  const userForm = {};
  userForm.userEmail = refs.formElem.elements.email.value;
  userForm.userMessage = refs.formElem.elements.message.value;
  saveTols('userKey', userForm);
}

function saveTols(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
}

function onload() {
  const data = loadFromLS('userKey');
  refs.formElem.elements.email.value = data.userEmail;
  refs.formElem.elements.message.value = data.userMessage;
}
function onFormElemSubmit(elem) {
  elem.preventDefault();
  // localStorage.removeItem('userKey');
  const data = loadFromLS('userKey');
  localStorage.removeItem('userKey');
  console.log(data);
  elem.target.reset();
}

onload();
