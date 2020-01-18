import UserService from '../_services/UserService';

export const SET_USERS_ACTION = 'SET_USERS';
export const SET_USER_ACTION = 'SET_USER';

export const findAllUsers = () => {
    return dispatch => {
        dispatch(setUsers({loaded: false, users: []}));
        UserService.findAll()
        .then(data => {
            dispatch(setUsers({loaded: true, msg: data.message, list: data.content}));
        })
        .catch(err => dispatch(setUsers({loaded: true, msg: err.message})));
    }
}

export const setUsers = (payload) => ({
    type: SET_USERS_ACTION,
    payload
})