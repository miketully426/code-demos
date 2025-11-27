// application that can take a list of songs and play them
// ideally, I want the user to select what song they want to hear
// Everything should be in functions

// list of songs
// array of songs (songs are objects)
// song object fields: title, genre, content, artist
const input = require("readline-sync");

class Song{
  constructor(title, genre='Unknown', content, artist) {
    this.title = title;
    this.genre = genre;
    this.content = content;
    this.artist = artist;
  }
}

const songList = [
  new Song('Golden', 'K-Pop', "We're going up...", 'Huntrix'),
  new Song('Rise Up', 'Unknown', "I rise like the day...", 'Andra Day'),
  new Song('Tom Sawyer', 'Classic Rock', "Today's Tom Sawyer...", 'Rush')
];

class Jukebox{
  constructor(songList) {
    this.songList = songList;
  }

  runJukebox() {
    let keepGoing = true;
    console.log(this.songList[0].constructor.name)
    do {
      const choice = input.questionInt('Do you want to play all songs on shuffle (1) or a single song? (2)')
      if (choice === 1) {
        this.shuffle(this.songList);
        keepGoing = false;
      } else if (choice === 2) {
        this.singleSongPlayer(this.songList);
        keepGoing = false;
      }
      if (keepGoing) {
        console.log('Invalid entry. Enter 1 or 2');
      }
    } while (keepGoing)
  }

  // able to play the songs
  // take in song
  // give now playing message
  // play the content
  playSong(song) {
    console.log(`Now playing: ${song.title}`);
    console.log(song.content);
  }

  // display the songs - just the title
  listSongs(songs) {
    songs.forEach((song) => console.log(song.title));
  }

  // Display list of songs
  // Get song choice
  // Play the song
  singleSongPlayer(listOfSongs){
    this.listSongs(listOfSongs);
    const inputSongNumber = input.questionInt("What song do you want to hear?");
    this.playSong(songList[inputSongNumber - 1]);
  }

  //Create recursive method to play all songs shuffled
  // Each run of the function should
  // 1. check how many songs in list
  // 2. if more than one, play a random song, remove it from list, call function again
  // 3. if only one song, play the last song
  shuffle(inputSongList) {
    // base case
    if(inputSongList.length === 1){
     this.playSong(inputSongList[0])
    } else {
      //recursive case
      const randomNumber = Math.floor(Math.random() * inputSongList.length);
      this.playSong(inputSongList[randomNumber]);
      inputSongList.splice(randomNumber, 1);
      this.shuffle(inputSongList);
    }
  }
}

const musicPlayer = new Jukebox(songList);

musicPlayer.runJukebox();
