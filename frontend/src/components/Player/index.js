import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';
import './Player.css';

const Player = () => {
    const song = useSelector(state => (state.player.song));
    // const songObj = useSelector(state => (state.songs));
    console.log('SONG FROM PLAYER______: ', song);

    if (!song) return null;

    return (
        <div className='audio-player-wrapper'>
            <AudioPlayer
                className='tester'
                autoPlay
                src={song.songUrl}
                onPlay={e => console.log('onPlay')}
            />
            <div className='player-content-wrapper'>
                <div className='song-art-sm' style={{backgroundImage:'url(' + song.imageUrl + ')'}}></div>
                <div className='song-details-sm'>
                    <p className='song-username-sm'>{song.User.username}</p>
                    <p className='song-title-sm'>{song.title}</p>
                </div>
            </div>
        </div>
    );
};



export default Player;
