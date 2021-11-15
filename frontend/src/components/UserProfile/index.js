import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory, Link} from 'react-router-dom';
import { getAllUsers } from '../../store/users';
import SongDelete from '../SongDelete';
import { playSong } from '../../store/player';
import './UserProfile.css';
import SongsListFull from '../SongsListFull';
import ProfileEditBtn from './ProfileEditBtn';

const UserProfile = () => {
    const {userId} = useParams();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => (state.session.user));
    const users = useSelector(state => Object.values(state.users));
    const songs = useSelector(state => Object.values(state.songs));

    console.log('USER PROFILE----: ', userId);
    // console.log('CURRENT USER-----: ', currentUser.id);
    console.log('ALL USERS-----: ', users);
    console.log('All SONGS......: ', songs);
    // const song = useSelector(state => (state.songs));
    // const history = useHistory();

    // const user = users[]

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const filteredSongs = songs.filter(song => song.userId == userId);
    const filteredUser = users.filter(user => user.id == userId);
    const userObj = filteredUser[0];

    console.log('filteredUser: ', filteredUser)

    // if (!song.songId) {
    //     console.log('THERE ARE NO SONGS');
    // } else {
    //     console.log('not empty!!!!!');
    // }

    // const songObj = song[songId];

    // const handleEditBtn = (songId) => {
    //     history.push(`/songs/${songId}/edit`);
    // };

    let profileEditBtns;

    if (currentUser?.id == userId) {
        profileEditBtns = (
            <>
                <ProfileEditBtn />
            </>
        );
        console.log('profile btn---------!!')
    } else {
        console.log('not on profile page :(');
    }

    const playSongBtn = useCallback((songObj) => {
        console.log('SONG URL FROM SINGLE!---: ', songObj);
        dispatch(playSong(songObj));
    }, [dispatch]);

    // if (songObj?.User.id === user?.id) {
    //     songEditBtns = (
    //         <>
    //             <button className='portal-edit-btn' onClick={() => handleEditBtn(songId)}>Edit</button>
    //             <SongDelete songId = {songId}/>
    //         </>
    //     );
    // } else {
    //     console.log('not winning :(');
    // }

    return (
        <div className='songs-list-full-wrapper user-profile-wrapper'>
            <div className='profile-image-lrg' style={{backgroundImage:'url(' + userObj?.profileImageUrl + ')'}}></div>
            <h1>{userObj?.username}</h1>
            <p>Thanks for stopping by. Hope you enjoy my latest uploads.</p>
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
                            <p className='song-user-link-text'>{song.User?.username}</p>
                        </li>
                    );
                })}
            </div>
        </div>
    );
};



export default UserProfile;
