//
// Student Name: Chantel Gee
// Assignment Name: Project 3: Dynamic Media Player
// Date: 11.02.2024
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