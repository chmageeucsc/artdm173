//
// Student Name: Chantel Gee
// Assignment Name: Lab 6: Rich Media
// Date: 04.10.25
//

document.addEventListener("DOMContentLoaded", init)

function init() {
  const vid = document.getElementById("vidLinkMain");
  const aud = document.getElementById("audLinkMain");
  const videoPlayer = document.getElementById("videoDiv");
  const audioPlayer = document.getElementById("audioDiv");

  // switch between video and audio
  vid.addEventListener("click", (e) => {
    videoPlayer.classList.remove("hidden")
    audioPlayer.classList.add("hidden");
  });
  aud.addEventListener("click", (e) => {
    videoPlayer.classList.add("hidden")
    audioPlayer.classList.remove("hidden");
  });
} // end init function