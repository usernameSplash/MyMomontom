const weatherContainer = document.querySelector('.js_weatherContainer');
const weather = weatherContainer.querySelector('.js_weather');
const weatherIcon = weatherContainer.querySelector('.js_weatherIcon');

const COORDS_LS = 'coords';
const API_KEY = 'eeccb44cb115403ac5627f6c9aaa9907';
function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const place = json.name;
      const condition = json.weather[0].main;
      const icon = json.weather[0].icon;

      weather.innerText = `${temperature}°C, ${place}, ${condition}`;
      weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    });
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const obj = {
    latitude,
    longitude,
  };

  saveCoords(obj);
}

function handleGeoError() {
  console.log('Access Geolocation is Failed');
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function getWeatherInterval() {
  askForCoords();
  const loadedCoords = localStorage.getItem(COORDS_LS);
  const parsedCoords = JSON.parse(loadedCoords);
  getWeather(parsedCoords.latitude, parsedCoords.longitude);
  console.log(parsedCoords);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS_LS);
  const parsedCoords = JSON.parse(loadedCoords);

  if (loadedCoords === null) {
    getWeatherInterval();
  } else {
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
  setInterval(getWeatherInterval, 1000 * 60 * 60);
}
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}
function init() {
  loadCoords();
}
init();
