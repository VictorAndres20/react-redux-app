import {TEST_ONE_ACTION} from '../actions';

const defaultState = {
    text: ''
};

 const testOne = (state = defaultState, action) => {
    switch(action.type){
        case TEST_ONE_ACTION:
            let text = action.payload;
            return {...state, text};

        default:
            return state;
    }
}

export default testOne;