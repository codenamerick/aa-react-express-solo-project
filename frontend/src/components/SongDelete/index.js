import React from 'react';
import {useDispatch} from 'react-redux';
import { useHistory, useParams } from 'react-router';
import * as sessionActions from '../../store/songs';

const SongDelete = ({user}) => {
    const {songId} = useParams();
    console.log('song id-------- : ', songId);
    const dispatch = useDispatch();
    const history = useHistory();

    // useEffect(() => {
    //     if (!showMenu) return;

    //     const closeMenu = () => {
    //         setShowMenu(false);
    //     };

    //     document.addEventListener('click', closeMenu);

    //     return () => document.removeEventListener('click', closeMenu);
    // }, [showMenu]);

    const handleDelete = (songId) => {
        dispatch(sessionActions.deleteSong(songId));

        history.push('/songs');
    };

    return (
        <>
            <button onClick={() => handleDelete(songId)}>Delete</button>
        </>
    );
};


export default SongDelete;
