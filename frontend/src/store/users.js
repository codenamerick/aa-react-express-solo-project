import {csrfFetch} from './csrf';

export const LOAD_USERS = 'users/LOAD_USERS';
export const UPDATE_USER = 'users/UPDATE_USER';

export const loadUsers = (list) => ({
    type: LOAD_USERS,
    list
});

const updateUser = (user) => ({
    type: UPDATE_USER,
    user
});

export const getAllUsers = () => async (dispatch) => {
    const res = await csrfFetch('/api/users');
    if (res.ok) {
        const list = await res.json();
        dispatch(loadUsers(list.users));
    }
};

export const editUser = (data) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${data.userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (res.ok) {
        const user = await res.json();
        dispatch(updateUser(user));
        return res;
    }
};



let newState = {
    users: null
};

const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_USERS:
            newState = {...state};
            action.list.forEach((user) => {
                newState[user.id] = user;
            });

            return newState;
        case UPDATE_USER:
            return {
                ...state,
                [action.user.updatedUser.id]: action.user.updatedUser
            }
        default:
            return state;
    }
};

export default usersReducer;
