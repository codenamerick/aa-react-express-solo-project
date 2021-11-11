import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getSongs } from '../../store/songs';
import './SongsListFull.css';

const SongsListFull = () => {
    const dispatch = useDispatch();

    const songs = useSelector(state => Object.values(state.songs))

    useEffect(() => {
        dispatch(getSongs());
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
                            </div>
                            <p>{song.title}</p>
                            <p>{song.User.username}</p>
                        </li>
                    );
                })}
            </div>
        </div>
    );
};



export default SongsListFull;
