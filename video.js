document.addEventListener("DOMContentLoaded", function() {
  let video = document.getElementById("bgvid");
  video.volume = 0.25;
  tryPlayVideo(video);
});

function tryPlayVideo(video) {
  video.play().then(() => {
      console.log("Video is playing with sound.");
  }).catch((error) => {
      console.log("Autoplay was prevented. Retrying...");
      setTimeout(() => tryPlayVideo(video), 500);
  });
}