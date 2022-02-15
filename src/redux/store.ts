import { combineReducers, createStore } from 'redux';

import * as reducers from './reducers/index'

const reducer = combineReducers(reducers);

export const store = createStore(reducer);

