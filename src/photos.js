const style = document.querySelector('.js_container').style;
const num_images = 9;
let images = [];
let prevRand = 0;
let curRand = 0;
function changeBackground() {
  do {
    prevRand = parseInt(Math.random() * num_images, 10);
  } while (prevRand === curRand);
  curRand = prevRand;

  style.backgroundImage = images[curRand];

  console.log(images[curRand]);
}

function initializeImageArray() {
  for (let i = 0; i < num_images; i++) {
    images.push(`url("images/img${i + 1}.jpg")`);
  }
}

function init() {
  initializeImageArray();
  changeBackground();
  setInterval(changeBackground, 20000);
}

init();
