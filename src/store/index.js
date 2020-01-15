import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import storeRoot from '../reducers';

//const initialState = {};

export const store = createStore(storeRoot, applyMiddleware(thunk));