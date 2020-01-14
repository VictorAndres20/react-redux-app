import {SET_SESSION_ACTION} from '../actions';

const defaultState = {
    ok: false,
    token: ''
};

const buildState = (state, {ok, token}) => {
    return {...state, ok, token};
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

