let song = document.getElementById('song');

let playBtn = document.getElementById('play');
let pauseBtn = document.getElementById('pause');
let stopBtn = document.getElementById('stop');
let rewindBtn = document.getElementById('rewind');
let forwardBtn = document.getElementById('forward');
let muteBtn = document.getElementById('mute');
let unmuteBtn = document.getElementById('unmute');

let songTitle = document.getElementById('song-title');
let songAuthor = document.getElementById('song-author');

let progressBar = document.getElementById('progress-bar');

function init() {

  playBtn.addEventListener('click', function () {
    playSong();
  });

  stopBtn.addEventListener('click', function () {
    pauseSong();
    song.currentTime = 0;
    playBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';
  });

  pauseBtn.addEventListener('click', function () {
    pauseSong();
  });

  rewindBtn.addEventListener('click', function () {
    song.currentTime -= 10;
  });

  forwardBtn.addEventListener('click', function () {
    song.currentTime += 10;
  });

  muteBtn.addEventListener('click', function () {
    song.muted = false;
    muteBtn.style.display = 'none';
    unmuteBtn.style.display = 'inline';
  });

  unmuteBtn.addEventListener('click', function () {
    song.muted = true;
    muteBtn.style.display = 'inline';
    unmuteBtn.style.display = 'none';
  });

}

function playSong() {

  song.play();
  bucle = setInterval(barState, 1000);

  playBtn.style.display = 'none';
  pauseBtn.style.display = 'inline';

  function barState() {
    if (!song.ended) {
      let total = parseInt(song.currentTime * 100 / song.duration);
      progressBar.style.width = `${total}%`;
    }
  }
}

function pauseSong() {
  song.pause();
  clearInterval(bucle);
  playBtn.style.display = 'inline';
  pauseBtn.style.display = 'none';
}

window.addEventListener('load', init, false);
