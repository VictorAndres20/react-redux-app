import {SET_SESSION_ACTION} from '../actions/session.actions';

const defaultState = {
    ok: false, 
    loaded: false,
    msg: '', 
    token: ''
};

const buildState = (state, {ok, loaded, msg, token}) => {
    return {...state, ok, loaded, msg, token};
};

const session = (state = defaultState, action) => {
    switch(action.type){
        case SET_SESSION_ACTION:{
            return buildState(state, action.payload);    
        }             
        default: 
            return state;
    }
}

export default session;