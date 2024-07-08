// Accessing DOM elements
const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const songTitleSpan = document.getElementById('songTitle');
const artistSpan = document.getElementById('artist');

// Define song information
const songTitle = "Sample Song";
const artist = "Sample Artist";

// Setting initial song information
songTitleSpan.textContent = songTitle;
artistSpan.textContent = artist;

// Adding event listeners
playButton.addEventListener('click', function() {
    audioPlayer.play();
});

pauseButton.addEventListener('click', function() {
    audioPlayer.pause();
});
