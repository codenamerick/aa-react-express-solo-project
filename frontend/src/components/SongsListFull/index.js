import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import songsReducer, { getSongs } from '../../store/songs';
import {useParams} from 'react-router-dom';
// import {useSelector} from 'react-redux';
// import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import './SongsListFull.css';
// import SignupFormModal from '../SignupFormModal';
// import DemoUser from '../DemoUser/DemoUser';

const SongsListFull = () => {
    // const sessionUser = useSelector(state => state.session.user);

    // let sessionLinks;

    // if (sessionUser) {
    //     sessionLinks = (
    //         <ProfileButton user={sessionUser} />
    //     );
    // } else {
    //     sessionLinks = (
    //         <>
    //             <LoginFormModal />
    //             <SignupFormModal />
    //             <DemoUser />
    //         </>
    //     );
    // }

    const dispatch = useDispatch();
    // const {songId} = useParams();

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
            {songs.map((song) => {
                return (
                    <li key={song.id} className='song-card'>
                        <div className='card-img-wrapper'>
                            <img src={song.imageUrl} alt='song art' />
                        </div>
                        <p>{song.title}</p>
                    </li>
                );
            })}
        </div>
    );
};



export default SongsListFull;
