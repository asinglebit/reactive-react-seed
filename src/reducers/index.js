/**
 * Libraries
 */

import {
    combineReducers
} from 'redux';
import {
    routerReducer
} from 'react-router-redux'

/**
 * Reducers
 */

import todos from './todos.reducer';

/**
 * Exports
 */

export default combineReducers({
    todos,
    routing: routerReducer
});
