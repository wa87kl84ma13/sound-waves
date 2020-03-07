const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const tracklist = document.getElementById('tracks');
const nowPlaying = document.getElementById('playing-now');
const progressBar = document.getElementById('progress');
//audioName = audio.getAttribute('name');

const songs = [
    'Public Service Announcement', 
    'Kill You',
    'Stan'
];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
    nowPlaying.innerText = song;
    audio.src = `mp3/${song}.mp3`;
}

// Play song
function playSong() {
    tracklist.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

// Pause song
function pauseSong() {
    tracklist.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

// Previous song
function prevSong() {
    songIndex--;

    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

// Next song
function nextSong() {
    songIndex++;

    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

playBtn.addEventListener('click', function() {
    const isPlaying = tracklist.classList.contains('play');

    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
        nowPlaying.style.display = 'inline';
    }
});

// Previous & next song events
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Play next song when song ends
audio.addEventListener('ended', nextSong);

// Update progress bar
audio.addEventListener('timeupdate', updateProgress);