import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('.js-iframe-video');
const player = new Player(iframe, {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', throttle(onTimeupdate, 1000));

player
  .setCurrentTime(loadToLS('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

function onTimeupdate(data) {
  saveToLS('videoplayer-current-time', data.seconds);
}
function saveToLS(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error.message);
  }
}
function loadToLS(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch (error) {
    console.log(error.message);
    return localStorage.getItem(key);
  }
}
