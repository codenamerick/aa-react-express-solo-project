import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import './Player.css';

const Player = () => {
    const song = useSelector(state => (state.player.song));
    // const allSongs = useSelector(state => Object.entries((state.songs)));

    if (!song) return null;

    return (
        <div className='audio-player-wrapper'>
            <AudioPlayer
                className='tester'
                autoPlay
                src={song.songUrl}
                // onPlay={e => console.log('onPlay')}
            />
            <div className='player-content-wrapper'>
                <div className='song-art-sm' style={{backgroundImage:'url(' + song.imageUrl + ')'}}></div>
                <div className='song-details-sm'>
                    <Link className='song-username-sm' to={{pathname: `/users/${song.User.id}`}}>{song.User.username}</Link>
                    <Link className='song-link-text song-title-sm' to={{pathname: `/songs/${song.id}`}}>
                        <p>{song.title}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};



export default Player;
