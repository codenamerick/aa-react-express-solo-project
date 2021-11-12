import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory, Redirect} from 'react-router-dom';
import { getSong } from '../../store/songs';
import SongDelete from '../SongDelete';
// import EditForm from '../SongEdit/EditForm';
import './SongPortalFull.css';

const SongPortalFull = () => {
    const {songId} = useParams();
    const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);
    const song = useSelector(state => Object.values(state.songs))
    const history = useHistory();

    useEffect(() => {
        dispatch(getSong(songId));
    }, [dispatch, songId]);

    if (!song) {
        return null;
    }

    const songObj = song[0];

    // const history = useHistory();

    // let editForm;

    const handleEditBtn = (songId) => {
        history.push(`/photos/${songId}/edit`);
        // if (sessionUser) {
        //     editForm= (
        //         <EditForm />
        //     );
        //     console.log('sesssssion user: ------- ', sessionUser);
        // }
        // <Redirect to='/songs/:songId/edit' />
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
                        <SongDelete />
                    </div>
                </div>
            </div>
        </div>
    );
};



export default SongPortalFull;
