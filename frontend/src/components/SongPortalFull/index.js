import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory, Link} from 'react-router-dom';
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

    const songObj = song[songId];

    const handleEditBtn = (songId) => {
        history.push(`/songs/${songId}/edit`);
    };

    let songEditBtns;

    if (songObj?.User.id === user?.id) {
        songEditBtns = (
            <>
                <button className='portal-edit-btn' onClick={() => handleEditBtn(songId)}>Edit</button>
                <SongDelete songId = {songId}/>
            </>
        );
    }

    const playSongBtn = useCallback((songObj) => {
        dispatch(playSong(songObj));
    }, [dispatch]);

    return (
        <div className='song-portal-lrg'>
            <div>
                <div className='portal-song-details'>
                    <div>
                        <button className='primary-play-btn' onClick={() => playSongBtn(songObj)}>
                            <i className="fas fa-play"></i>
                        </button>
                        <div>
                            <h2>{songObj?.title}</h2>
                            <Link class='song-hero-link' to={{pathname: `/users/${songObj?.User.id}`}}>
                                <h3>{songObj?.User.username}</h3>
                            </Link>
                        </div>
                    </div>
                    <div>
                        {songEditBtns}
                    </div>
                </div>
                <div className='song-img-lrg' style={{backgroundImage:'url(' + songObj?.imageUrl + ')'}}>
                </div>
            </div>
        </div>
    );
};



export default SongPortalFull;
