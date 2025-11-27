// application that can take a list of songs and play them
// ideally, I want the user to select what song they want to hear
// Everything should be in functions

// list of songs
// array of songs (songs are objects)
// song object fields: title, genre, content, artist
const input = require("readline-sync");

const songList = [
  {
    title: "Golden",
    genre: "K-Pop",
    content: "We're going up...",
    artist: "Huntrix",
  },
  {
    title: "Rise Up",
    genre: "Unknown",
    content: "I rise like the day...",
    artist: "Andra Day",
  },
  {
    title: "Tom Sawyer",
    genre: "Classic Rock",
    content: "Today's Tom Sawyer...",
    artist: "Rush",
  },
];

main();

// listSongs(songList);
// playSong(1, songList);

// display the songs - just the title
function listSongs(songs) {
  songs.forEach((song) => console.log(song.title));
}

// able to play the songs
// take in song number (position in array)
// give now playing message
// play the content

function playSong(songNumber, songs) {
  const song = songs[songNumber];
  console.log(`Now playing: ${song.title}`);
  console.log(song.content);
}

// Display list of songs
// Get song choice
// Play the song
function main() {
  listSongs(songList);
  const inputSongNumber = input.questionInt("What song do you want to hear?");
  playSong(inputSongNumber - 1, songList);
}

// Two options for improvement
// Input title from the user with case insensitivy
// Search by song data
