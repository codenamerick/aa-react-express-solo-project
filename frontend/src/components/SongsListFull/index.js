import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllSongs } from '../../store/songs';
import {Link} from 'react-router-dom';
import './SongsListFull.css';

const SongsListFull = () => {
    const dispatch = useDispatch();

    const songs = useSelector(state => Object.values(state.songs))

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);

    if (!songs) {
        return null;
    }

    return (
        <div className='songs-list-full-wrapper'>
            <h2>Songs List</h2>
            <div>
                {songs.map((song) => {
                    return (
                        <li key={song.id} className='song-card'>
                            <div className='card-img-wrapper'>
                                <img src={song.imageUrl} alt='song art' />
                                <div className='play-action-overlay'></div>
                            </div>
                            <Link to={{pathname: `/songs/${song.id}`}}>
                                <p>{song.title}</p>
                            </Link>
                            <p>{song.User?.username}</p>
                        </li>
                    );
                })}
            </div>
        </div>
    );
};



export default SongsListFull;
