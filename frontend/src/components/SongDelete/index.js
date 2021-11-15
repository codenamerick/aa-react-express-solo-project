import React from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import * as sessionActions from '../../store/songs';

const SongDelete = ({songId}) => {
    const dispatch = useDispatch();
    const history = useHistory();

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
