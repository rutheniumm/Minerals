const videoElement = document.createElement('video');
document.body.appendChild(videoElement);

const mediaSource = new MediaSource();
videoElement.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener('sourceopen', () => {
  const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E"');

  fetch('https://vod-uploads-middleware-api.livepush.io/download?video=3QcwuSdWGkYM8d&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNkMWM0YmJmZDk5MTQ1NzI1OTAzZTQiLCJpZCI6ImFHdUE5d2JDejc0Z1ciLCJuYW1lIjoiVHlsZXIgRnJheXNlciIsInNjb3BlIjpbInJvb3QiXSwiaWF0IjoxNzA3OTQwOTM5LCJleHAiOjE3MDc5NDQ1Mzl9.PpNSrUYzrHL8dY2b3p8M-_kaD1WZlArWhf3WxbApKpE')
    .then(response => response.arrayBuffer())
    .then(buffer => {
      sourceBuffer.addEventListener('updateend', () => {
        if (!sourceBuffer.updating && mediaSource.readyState === 'open') {
          mediaSource.endOfStream();
          videoElement.play();
        }
      });

      sourceBuffer.appendBuffer(buffer);
    })
    .catch(error => {
      console.error('Error fetching or parsing video:', error);
    });
});
