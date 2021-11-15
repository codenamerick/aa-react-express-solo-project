import {csrfFetch} from './csrf';

export const LOAD_USERS = 'users/LOAD_USERS';

export const loadUsers = (list) => ({
    type: LOAD_USERS,
    list
});

export const getAllUsers = () => async (dispatch) => {
    const res = await csrfFetch('/api/users');
    console.log('THIS IS ACTION----: ', res)
    if (res.ok) {
        const list = await res.json();
        dispatch(loadUsers(list.users));
    }
};

let newState = {
    users: null
};

const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_USERS:
            // console.log('THIS IS ACTION----: ', action)
            newState = {...state};
            action.list.forEach((user) => {
                newState[user.id] = user;
            });

            return newState;
        default:
            return state;
    }
};

export default usersReducer;
