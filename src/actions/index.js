import {loginService, validateLogin} from '../_services/LoginService';
import {batch} from 'react-redux';

export const LOGIN_ACTION = 'LOGIN';
export const SET_SESSION_ACTION = 'SET_SESSION';

export const login = (payload, navigate) => {
    return dispatch => {
        // You can call more actions here before execute fetch.
        // dispatch(someAction(payload))

        // Use batch from react-redux to call two or more dis
        // dispatch(someAction(payload))
        dispatch(setSession({loaded: false}));
        loginService(payload.body)
        .then(data => {
            if(validateLogin(data)){
                dispatch(setSession({
                    ok: true, 
                    loaded: true,
                    msg: data.content.message, 
                    token: data.content.token
                }));
                if(typeof navigate === 'function') navigate();
            } else
                dispatch(setSession({loaded: true, msg: (data.content == null ? data.message : data.content.message)}));
        })
        .catch(err => dispatch(setSession({loaded: true, msg: err.message})));

        return;
    };
};

export const setLogin = (payload) => ({
    type: LOGIN_ACTION,
    payload
});

export const setSession = (payload) => ({
    type: SET_SESSION_ACTION,
    payload
});





/** This are only tests, dont copy to notes */
export const TEST_ONE_ACTION = 'TEST_ONE';

export const setTestOne = payload => {
    return {
        type: TEST_ONE_ACTION,
        payload
    };
};