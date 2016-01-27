Webcam Grabber
==============

This is a simple npm module for grabbing input from a [MediaSrouce Extensions](http://w3c.github.io/media-source/) stream. webcam. It's essentially a very lightweight convenience wrrapper around [hls.js](https://github.com/dailymotion/hls.js), so you may want to look there for more info.

Usage
------

```js

var mseStreamGrabber = require('mse-strem-grabber');
var src = 'http://www.streambox.fr/playlists/test_001/stream.m3u8';
var video = mseStreamGrabber(src, onStreamLoaded);

document.body.appendChild(video);

function onStreamLoaded(err, v) {
	if(err) {
		throw err;
	}

	v.play();
};

```

Example
-------

To run the included example:

```bash
npm install
npm run example
```
The example uses the [budo](https://github.com/mattdesl/budo) development server to run.