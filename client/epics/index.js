/*
 * Libraries
 */

import {
    combineEpics
} from 'redux-observable';

/*
 * Epics
 */

import todos from './todos';

/*
 * Exports
 */

export default combineEpics(...todos);
