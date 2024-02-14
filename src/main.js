const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const videoUrl = 'https://vod-uploads-middleware-api.livepush.io/download?video=3QcwuSdWGkYM8d&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNkMWM0YmJmZDk5MTQ1NzI1OTAzZTQiLCJpZCI6ImFHdUE5d2JDejc0Z1ciLCJuYW1lIjoiVHlsZXIgRnJheXNlciIsInNjb3BlIjpbInJvb3QiXSwiaWF0IjoxNzA3OTQwOTM5LCJleHAiOjE3MDc5NDQ1Mzl9.PpNSrUYzrHL8dY2b3p8M-_kaD1WZlArWhf3WxbApKpE';
const finalUrl = proxyUrl + videoUrl;

fetch(finalUrl, {
  headers: {
    'Origin': 'https://minerals-plum.vercel.app',
    'X-Requested-With': 'XMLHttpRequest'
  }
}).then(function(x){
  x.arrayBuffer().then(function(){
    console.log(5)
  })
})
