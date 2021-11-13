import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import { getAllSongs } from '../../store/songs';
import SongDelete from '../SongDelete';
import './SongPortalFull.css';

const SongPortalFull = () => {
    const {songId} = useParams();
    const dispatch = useDispatch();
    const song = useSelector(state => (state.songs));
    const history = useHistory();

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch, songId]);

    if (!song.songId) {
        console.log('THERE ARE NO SONGS');
    } else {
        console.log('not empty!!!!!');
    }

    const songObj = song[songId];

    const handleEditBtn = (songId) => {
        history.push(`/songs/${songId}/edit`);
    };

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
                    <div>
                        <button onClick={() => handleEditBtn(songId)}>Edit</button>
                        <SongDelete songId = {songId}/>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default SongPortalFull;
