import {combineReducers} from 'redux';
import testOne from './testOne';
import session from './session';
import user from './user';

export default combineReducers({
    testOne,
    session,
    user
});