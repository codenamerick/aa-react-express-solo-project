import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllSongs } from '../../store/songs';
import {Link} from 'react-router-dom';
import './SongsListFull.css';
import { playSong } from '../../store/player';

const SongsListFull = () => {
    const dispatch = useDispatch();

    const songs = useSelector(state => Object.values(state.songs))

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);

    const playSongBtn = useCallback((song) => {
        console.log('SONG URL!---: ', song);
        dispatch(playSong(song));
    }, [dispatch]);

    if (!songs) {
        return null;
    }

    return (
        <div className='songs-list-full-wrapper'>
            <h2>Listen to the latest uploads below.</h2>
            <div>
                {songs.map((song) => {
                    return (
                        <li key={song.id} className='song-card'>
                            <div className='card-img-wrapper' style={{backgroundImage:'url(' + song.imageUrl + ')'}}>
                                <div className='play-action-overlay'>
                                    <button className='primary-play-btn list-style-play-btn' onClick={() => playSongBtn(song)}>
                                    <i className="fas fa-play"></i>
                                    </button>
                                </div>
                            </div>
                            <Link className='song-link-text' to={{pathname: `/songs/${song.id}`}}>
                                <p>{song.title}</p>
                            </Link>
                            <p className='song-user-link-text'>{song.User?.username}</p>
                        </li>
                    );
                })}
            </div>
        </div>
    );
};



export default SongsListFull;
