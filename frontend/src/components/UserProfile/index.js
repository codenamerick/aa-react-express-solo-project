import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, Link} from 'react-router-dom';
import { getAllUsers } from '../../store/users';
import { playSong } from '../../store/player';
import './UserProfile.css';
import ProfileEditBtn from './ProfileEditBtn';

const UserProfile = () => {
    const {userId} = useParams();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => (state.session.user));
    const users = useSelector(state => Object.values(state.users));
    const songs = useSelector(state => Object.values(state.songs));

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const filteredSongs = songs.filter(song => song.userId === +userId);
    const filteredUser = users.filter(user => user.id === +userId);
    const userObj = filteredUser[0];

    let profileEditBtns;

    if (currentUser?.id === +userId) {
        profileEditBtns = (
            <>
                <ProfileEditBtn />
            </>
        );
    }

    const playSongBtn = useCallback((songObj) => {
        dispatch(playSong(songObj));
    }, [dispatch]);

    return (
        <div className='songs-list-full-wrapper user-profile-wrapper'>
            <div className='profile-image-lrg' style={{backgroundImage:'url(' + userObj?.profileImageUrl + ')'}}></div>
            <h1>{userObj?.username}</h1>
            <p>{userObj?.bio}</p>
            {profileEditBtns}
            <div>
                {filteredSongs.map((song) => {
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
                            <Link className='song-user-link-text' to={{pathname: `/users/${song.User?.id}`}}>{song.User?.username}</Link>
                        </li>
                    );
                })}
            </div>
        </div>
    );
};



export default UserProfile;
