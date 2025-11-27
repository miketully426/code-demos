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

function playSong(song) {
  console.log(`Now playing: ${song.title}`);
  console.log(song.content);
}

// Display list of songs
// Get song choice
// Play the song
function main() {
  let keepGoing = true;
  do {
    const choice = input.questionInt('Do you want to play all songs on shuffle (1) or a single song? (2)')
    if (choice === 1) {
      shuffle(songList);
      keepGoing = false;
    } else if (choice === 2) {
      singleSongPlayer(songList);
      keepGoing = false;
    }
    if (keepGoing) {
      console.log('Invalid entry. Enter 1 or 2');
    }
  } while (keepGoing)
}

function singleSongPlayer(listOfSongs){
  listSongs(listOfSongs);
  const inputSongNumber = input.questionInt("What song do you want to hear?");
  playSong(songList[inputSongNumber - 1]);
}

//Create recursive method to play all songs shuffled
// Each run of the function should
// 1. check how many songs in list
// 2. if more than one, play a random song, remove it from list, call function again
// 3. if only one song, play the last song
function shuffle(inputSongList) {
  // base case
  if(inputSongList.length === 1){
    playSong(inputSongList[0])
  } else {
    //recursive case
    const randomNumber = Math.floor(Math.random() * inputSongList.length);
    playSong(inputSongList[randomNumber]);
    inputSongList.splice(randomNumber, 1);
    shuffle(inputSongList);
  }
}

// Two options for improvement
// Input title from the user with case insensitivy
// Search by song data
