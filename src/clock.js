const clockContainer = document.querySelector('.js_clockContainer');
const clockTitle = clockContainer.querySelector('.js_clock');

function getTime() {
  const date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  hours = hours < 10 ? `0${hours}` : `${hours}`;
  clockTitle.innerText = `${hours}:${minutes}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
