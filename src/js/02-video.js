import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

player.on('timeupdate', throttle(onPlayerTime, 1000));

function onPlayerTime(evt) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(evt))
        console.log(evt);
}
const currentTime = JSON.parse(localStorage.getItem(STORAGE_KEY));
player.setCurrentTime(currentTime.seconds);