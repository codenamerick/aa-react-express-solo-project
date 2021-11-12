import {csrfFetch} from './csrf';

export const LOAD_SONGS = 'songs/LOAD_SONGS';
export const LOAD_ONE_SONG = 'songs/LOAD_ONE_SONG'
export const CREATE_SONG = 'songs/CREATE_SONG';
export const UPDATE_SONG = 'songs/UPDATE_SONG';
export const DELETE_SONG = 'songs/DELETE_SONG';

const load = (list) => ({
    type: LOAD_SONGS,
    list
});

const loadSong = (song) => ({
    type: LOAD_ONE_SONG,
    song
});

const addOneSong = (song) => ({
    type: CREATE_SONG,
    song
});

const updateSong = (song) => ({
    type: UPDATE_SONG,
    song
});

const remove = (song) => ({
    type: DELETE_SONG,
    song
});

export const getAllSongs = () => async (dispatch) => {
    const res = await csrfFetch('/api/songs');

    if (res.ok) {
        const list = await res.json();
        dispatch(load(list.songs));
    }
};

export const getSong = (songId) => async (dispatch) => {
    const res = await csrfFetch(`/api/songs/${songId}`);

    if (res.ok) {
        const song = await res.json();
        dispatch(loadSong(song.song));
    }
};

export const createSong = (data) => async (dispatch) => {
    const res = await csrfFetch('/api/songs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (res.ok) {
        const song = await res.json();
        dispatch(addOneSong(song));

        return song;
    }
};

export const editSong = (data) => async (dispatch) => {
    console.log('this is DATA-------: ', data);
    const res = await csrfFetch(`/api/songs/${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (res.ok) {
        const song = await res.json();
        console.log('_________----------', song.updatedSong.id);
        dispatch(updateSong(song));
        return res;
    }
};

export const deleteSong = (songId) => async (dispatch) => {
    const res = await fetch(`/api/songs/${songId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        const song = await res.json();
        dispatch(remove(song.id));
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
        case LOAD_ONE_SONG:
            return {
                ...state,
                [action.song.id]: action.song
            }
        case CREATE_SONG:
            return {
                ...state,
                [action.song.newSong.id]: action.song.newSong
            }
        case UPDATE_SONG:
            console.log('ACTION.SONGGGGG-----', action);
            return {
                ...state,
                [action.song.updatedSong.id]: action.song.updatedSong
            }
        default:
            return state;
    }
};

export default songsReducer;