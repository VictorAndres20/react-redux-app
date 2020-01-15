import {combineReducers} from 'redux';
import testOne from './testOne';
import session from './session';
import loginState from './login';

export default combineReducers({
    testOne,
    session,
    loginState
});