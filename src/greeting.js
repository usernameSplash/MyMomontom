const form = document.querySelector('.js_form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js_greeting');

const NAME_LS = 'name';
const SHOWING_CN = 'showing';

function handleInputName(event) {
  event.preventDefault();
  localStorage.setItem(NAME_LS, input.value);
  paintGreeting(input.value);
  input.value = '';
}

function askForName() {
  form.classList.add(SHOWING_CN);
  console.log(form);
  form.addEventListener('submit', handleInputName);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello, ${text}`;
}

function loadName() {
  const currentName = localStorage.getItem(NAME_LS);
  if (currentName === null) {
    askForName();
  } else {
    paintGreeting(currentName);
  }
}

function init() {
  loadName();
}
init();
