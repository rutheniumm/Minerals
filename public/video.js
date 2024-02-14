import Hls from 'https://cdn.jsdelivr.net/npm/hls.js@1.5.5/+esm'
var center = document.createElement("center")
document.body.appendChild(center);
let video = document.createElement("video")
video.setAttribute("id", "video")
video.setAttribute("height", 600)
center.appendChild(video)

if (Hls.isSupported()) {
        var hls = new Hls({
          debug: true,
        });
        hls.loadSource('https://github.com/rutheniumm/Minerals/raw/main/public/overworld.mp4');
        hls.attachMedia(video);
        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
          video.muted = false;
          video.play();
        });
      }
      else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = 'https://github.com/rutheniumm/Minerals/raw/main/public/overworld.mp4';
        video.addEventListener('canplay', function () {
          video.play();
        });
      }
    </script>
</html>
