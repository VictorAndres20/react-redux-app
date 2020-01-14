import {LOGIN_ACTION} from '../actions';

const defaultState = {
    ok: false,
    msg: ''
};

const buildState = (state, {ok, msg}) => {
    return {...state, ok, msg};
};

const loginState = (state = defaultState, action) => {
    switch(action.type){
        case LOGIN_ACTION:{
            return buildState(state, action.payload);
        }
        default:
            return state;
    }
}

export default loginState;