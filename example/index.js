var mseStreamGrabber = require('../index.js');
var src = 'http://www.streambox.fr/playlists/test_001/stream.m3u8';
var video = mseStreamGrabber(src, onStreamLoaded);

document.body.appendChild(video);

function onStreamLoaded(err, v) {
	if(err) {
		throw err;
	}

	v.play();
};