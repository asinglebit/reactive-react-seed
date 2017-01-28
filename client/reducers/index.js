/*
 * Libraries
 */

import {
    combineReducers
} from 'redux';

/*
 * Reducers
 */

import todos from './todos';

/*
 * Exports
 */

export default combineReducers({
    todos
});
