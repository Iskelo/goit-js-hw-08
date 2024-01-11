import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const storageKey = 'videoplayer-current-time';


const player = new Player(iframe, {
    id: 19231868,
    width: 640
});

const getCurrentTime = function (currentTime) {
	const seconds = currentTime.seconds;
	localStorage.setItem(storageKey, JSON.stringify(seconds));
 };

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(storageKey)) || 0);