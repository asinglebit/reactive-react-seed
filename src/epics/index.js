/**
 * Libraries
 */

import {
    combineEpics
} from 'redux-observable';

/**
 * Epics
 */

import todos from './todos.epics';

/**
 * Exports
 */

export default combineEpics(...todos);
