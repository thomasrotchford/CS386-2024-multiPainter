import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import music from './KM.mp3';
import './MusicPlayer.css'; // Import your CSS file for styling

const MusicPlayer = () => {
    return (
        <div className="music-player-container">
            <div className="now-playing-bar"> Now Playing: Song Title </div>
            <ReactAudioPlayer src={music} controls />
        </div>
    );
}

export default MusicPlayer;
