import {SET_USERS_ACTION, SET_USER_ACTION} from '../actions/user.actions';

const defaultState = {
    loaded: false,
    msg: '',
    list: [],
    data: {}
}

const user = (state = defaultState, action) => {
    switch(action.type){
        case SET_USERS_ACTION:{
            const {loaded, list, msg} = action.payload;
            return {...state, loaded, msg, 
                list: (list ? list : state.list)
            }
        }

        case SET_USER_ACTION:{
            const {loaded, data, msg} = action.payload;
            return {...state, loaded, msg, 
                data: (data ? data : state.data)
            }
        }

        default:
            return {...state};
    }
}

export default user;