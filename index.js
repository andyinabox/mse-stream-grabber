var Hls = require('hls.js');

module.exports = function mseStreamGrabber(src, cb) {
	var v = document.createElement('video')
		, hls;

	if(Hls.isSupported()) {
		hls = new Hls();
		hls.loadSource(src);
		hls.attachMedia(v);
		hls.on(Hls.Events.MANIFEST_PARSED, function() {
			cb(null, v);
		});
	} else {
		cb(new Error("MediaSource Extensions are not suported on your browser."))
	}

	return v;
}

