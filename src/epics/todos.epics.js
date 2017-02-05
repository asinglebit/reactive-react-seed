/**
 * Libraries
 */

import {
    Observable
} from 'rxjs';

/**
 * Actions
 */

import * as Actions from '../actions';

/**
 * Epics
 */

export const addEpicTodoAction = action$ => {
    return action$
        .ofType(Actions.ADD_EPIC_TODO)
        .delay(1000)
        .map(action => Actions.addTodo(action.payload));
};

export const addEpicHttpTodoAction = action$ => {
    return action$
        .ofType(Actions.ADD_EPIC_HTTP_TODO)
        .switchMap(() => Observable.fromPromise(
            fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
        ))
        .map(response => {
            const todo = response;
            return Actions.addTodo({
                id: response.id.toString(),
                text: response.title
            });
        })
}

/**
 * Exports
 */

export default [
    addEpicTodoAction,
    addEpicHttpTodoAction
];
