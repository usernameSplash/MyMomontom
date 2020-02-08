/**
 * Representing a digital clock.
 * The format of clock is "Hours:Minutes:Seconds"
 */

const clockContainer = document.querySelector('.js_clockContainer');
const clockTitle = clockContainer.querySelector('.js_clock');

function getTime() {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${
    minutes < 10 ? `0${minutes}` : `${minutes}`
  }:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
