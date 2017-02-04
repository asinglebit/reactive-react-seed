/**
 * Libraries
 */

import {
    combineReducers
} from 'redux';

/**
 * Reducers
 */

import todos from './todos.reducer';

/**
 * Exports
 */

export default combineReducers({
    todos
});
