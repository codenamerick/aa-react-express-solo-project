import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router';
import * as sessionActions from '../../store/songs';

const SongDelete = () => {
    const {songId} = useParams();
    const song = useSelector(state => Object.values(state.songs))

    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = (songId) => {
        dispatch(sessionActions.deleteSong(song));

        history.push('/songs');
    };

    return (
        <>
            <button onClick={() => handleDelete(songId)}>Delete</button>
        </>
    );
};


export default SongDelete;
