import {csrfFetch} from './csrf';

export const LOAD_SONGS = 'songs/LOAD_SONGS';
export const CREATE_SONG = 'songs/CREATE_SONG';
export const UPDATE_SONG = 'songs/UPDATE_SONG';
export const DELETE_SONG = 'songs/DELETE_SONG';

const load = (list) => ({
    type: LOAD_SONGS,
    list
});

export const getSongs = () => async (dispatch) => {
    const res = await csrfFetch('/api/songs');

    if (res.ok) {
        const list = await res.json();
        dispatch(load(list.songs));
    }
};

let newState = {};

const songsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_SONGS:
            newState = {...state};
            action.list.forEach((song) => {
                newState[song.id] = song;
            });

            return newState;
        default:
            return state;
    }
};

export default songsReducer;
