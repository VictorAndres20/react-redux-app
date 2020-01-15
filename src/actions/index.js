import {loginService, validateLogin} from '../_services/LoginService';

export const LOGIN_ACTION = 'LOGIN';
export const SET_SESSION_ACTION = 'SET_SESSION';

export const login = (payload, navigate) => {
    return dispatch => {
        // You can call more actions here before execute fetch.
        // dispatch(someAction(payload))

        loginService(payload.body)
        .then(data => {
            if(validateLogin(data)){
                dispatch(setLogin({ok: true, msg: data.content.message}));
                dispatch(setSession({ok: true, token: data.content.token}));
                if(typeof navigate === 'function') navigate();
            } else
                dispatch(setLogin({ok: false, msg: data.message}));
        })
        .catch(err => dispatch(setLogin({ok: false, msg: err.message})));

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