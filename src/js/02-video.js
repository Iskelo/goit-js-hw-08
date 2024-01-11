import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});

const options = {
	width: 640,
	loop: true
};

player.setCurrentTime(300).then(function(seconds) {
	// seconds = the actual time that the player seeked to
}).catch(function(error) {
	switch (error.name) {
		 case 'RangeError':
			  // the time was less than 0 or greater than the video’s duration
			  break;

		 default:
			  // some other error occurred
			  break;
	}
});