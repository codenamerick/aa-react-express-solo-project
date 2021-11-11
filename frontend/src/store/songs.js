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
    // const list = await res.json();
    // console.log('this is a list of songs -----', list);
    // dispatch(load(list.songs));

    if (res.ok) {
        const list = await res.json();
        dispatch(load(list.songs));
    }
};

const initialState = {
    list: []
};

// const sortList = (list) => {
//     return list
//         .sort((songA, songB) => {
//             return songA.id - songB.id
//         })
//         .map((song) => song.id);
// };

let newState = {};

const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SONGS:
            // console.log('ACTION.LIST---', action.list);
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
