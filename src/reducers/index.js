import {combineReducers} from 'redux';
import testOne from './testOne';
import session from './session';
import user from './user';

/** Redux Form */
import {reducer as reduxForm} from 'redux-form';

export default combineReducers({
    testOne,
    session,
    user,
    
    /** Redux form MUST be 'form' */
    form: reduxForm
});