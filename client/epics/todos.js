/**
* Libraries
*/

import { Observable } from 'rxjs';

/**
* Actions
*/

import * as Actions from '../actions';

/**
* Epics
*/

export const addEpicTodoaction = action$ => {
  return action$
  .ofType(Actions.ADD_EPIC_TODO)
  .delay(1000)
  .switchMap(action => Observable.of(Actions.addTodo(action.payload)))
};

/**
* Exports
*/

export default [
	addEpicTodoaction
];