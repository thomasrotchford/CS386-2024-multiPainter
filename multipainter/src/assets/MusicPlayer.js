import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './MusicPlayer.css'; // Import your CSS file for styling

const importAll = (r) => {
  let songs = {};
  r.keys().forEach((key) => (songs[key.replace("./", "")] = r(key)));
  return songs;
};

const songs = importAll(
  require.context("./Jams", false, /\.(mp3)$/)
);

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // State for the currently selected song index

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % Object.keys(songs).length); // Play the next song in the array
  };

  const playPreviousSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + Object.keys(songs).length) % Object.keys(songs).length); // Play the previous song in the array
  };

  return (
    <div className="music-player-container">
      <div className="now-playing-bar"> Now Playing: {Object.keys(songs)[currentSongIndex]} </div>
      <ReactAudioPlayer src={Object.values(songs)[currentSongIndex]} controls />
      <div className="navigation-buttons">
        <button class="nav-button" onClick={playPreviousSong}>Previous</button>
        <button class="nav-button" onClick={playNextSong}>Next</button>
      </div>
    </div>
  );
}

export default MusicPlayer;
