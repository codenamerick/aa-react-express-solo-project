import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import { getAllSongs } from '../../store/songs';
import SongDelete from '../SongDelete';
import { playSong } from '../../store/player';
import './SongPortalFull.css';

const SongPortalFull = () => {
    const {songId} = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => (state.session.user));
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

    let songEditBtns;

    if (songObj?.User.id === user?.id) {
        songEditBtns = (
            <>
                <button onClick={() => handleEditBtn(songId)}>Edit</button>
                <SongDelete songId = {songId}/>
            </>
        );
    } else {
        console.log('not winning :(');
    }

    const playSongBtn = useCallback((songObj) => {
        console.log('SONG URL FROM SINGLE!---: ', songObj);
        dispatch(playSong(songObj));
    }, [dispatch]);

    return (
        <div className='song-portal-lrg'>
            <div>
                <div className='portal-song-details'>
                    <div>
                        <button className='primary-play-btn' onClick={() => playSongBtn(songObj)}>
                            <i class="fas fa-play"></i>
                        </button>
                        <div>
                            <h2>{songObj?.title}</h2>
                            <h3>{songObj?.User.username}</h3>
                        </div>
                    </div>
                    <div>
                        {songEditBtns}
                    </div>
                </div>
                <div className='song-img-lrg' style={{backgroundImage:'url(' + songObj?.imageUrl + ')'}}>
                    {/* <img src={songObj?.imageUrl} alt='song art' /> */}
                </div>
            </div>
        </div>
    );
};



export default SongPortalFull;
