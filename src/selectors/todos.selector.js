/**
 * Libraries
 */

import {
    createSelector
} from 'reselect';

/**
 * Simple selector
 */

export const getTodosSimpleSelector = (state) => state.todos;

/**
 * Complex selector
 */

export const getTodosComplexSelector = createSelector(
    [getTodosSimpleSelector],
    (todos) => {
        return todos;
    }
);
