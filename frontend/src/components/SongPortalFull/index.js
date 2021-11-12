import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { getSong } from '../../store/songs';
import './SongPortalFull.css';

const SongPortalFull = () => {
    const {songId} = useParams();
    const dispatch = useDispatch();
    const song = useSelector(state => Object.values(state.songs))

    // const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getSong(songId));
    }, [dispatch, songId]);

    if (!song) {
        return null;
    }

    const songObj = song[0];

    return (
        <div className='songs-list-full-wrapper'>
            <h2>Song</h2>
            <div>
                <div className='card-img-wrapper'>
                    <div className='song-card'>
                        <img src={songObj?.imageUrl} alt='song art' />
                    </div>
                    <div>
                        <p>{songObj?.title}</p>
                        <p>{songObj?.User.username}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default SongPortalFull;
