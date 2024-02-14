
  const videoElement = document.createElement('video');
  videoElement.src = 'https://vod-uploads-middleware-api.livepush.io/download?video=3QcwuSdWGkYM8d&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNkMWM0YmJmZDk5MTQ1NzI1OTAzZTQiLCJpZCI6ImFHdUE5d2JDejc0Z1ciLCJuYW1lIjoiVHlsZXIgRnJheXNlciIsInNjb3BlIjpbInJvb3QiXSwiaWF0IjoxNzA3OTQwOTM5LCJleHAiOjE3MDc5NDQ1Mzl9.PpNSrUYzrHL8dY2b3p8M-_kaD1WZlArWhf3WxbApKpE'; // Replace with the path to your MP4 file
  videoElement.autoplay = true;
  videoElement.controls = true;
  document.body.appendChild(videoElement);

