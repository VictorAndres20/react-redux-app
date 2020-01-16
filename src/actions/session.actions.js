import {loginService, validateLogin} from '../_services/LoginService';
import {batch} from 'react-redux';

export const SET_SESSION_ACTION = 'SET_SESSION';

export const login = (payload, navigate) => {
    return dispatch => {
        // You can call more actions here before execute fetch.
        // dispatch(someAction(payload));

        // Use batch from react-redux to call two or more actions
        /*
        batch(() => {
            dispatch(someAction1(payload));
            dispatch(someAction2(payload));
        })
        */
        
        
        dispatch(setSession({ok: false, loaded: false}));
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
                dispatch(setSession({                    
                    loaded: true, 
                    msg: (data.content == null ? data.message : data.content.message)
                }));
        })
        .catch(err => dispatch(setSession({loaded: true, msg: err.message})));

        return;
    };
};

export const setSession = (payload) => ({
    type: SET_SESSION_ACTION,
    payload
});