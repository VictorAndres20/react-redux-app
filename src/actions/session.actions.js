import {loginService, validateLogin} from '../_services/LoginService';
import LocalStorageHelper from '../_helpers/LocalStorageHelper';

export const SET_SESSION_ACTION = 'SET_SESSION';

export const login = (payload, navigate) => {
    return dispatch => {        
        
        dispatch(setSession({ok: false, loaded: false}));
        loginService(payload.body)
        .then(data => {
            if(validateLogin(data)){
                const {message , token} = data.content;
                dispatch(setSession({
                    ok: true, 
                    loaded: true,
                    msg: message, 
                    token
                }));
                LocalStorageHelper.saveToken(token);
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

export const logout = (navigate) => {
    return dispatch => {       
        dispatch(setSession({ok: false, loaded: true}));
        LocalStorageHelper.removeToken();
        if(typeof navigate === 'function') navigate();
        return;
    };
};

export const setSession = (payload) => ({
    type: SET_SESSION_ACTION,
    payload
});