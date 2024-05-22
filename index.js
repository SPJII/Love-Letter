// get the audio element
const audio = document.getElementById('nsync-audio');

// play audio as soon as the page loads
window.addEventListener('load', () => {
  audio.currentTime = 0; // Start the audio from the beginning
  audio.play();
})