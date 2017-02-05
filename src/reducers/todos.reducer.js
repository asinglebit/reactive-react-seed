/**
 * Libraries
 */

import R from 'ramda';

/**
 * Actions
 */

import {
    ADD_TODO,
    DELETE_TODO
} from '../actions';

/**
 * Default state
 */

const defaultTodos = [];

/**
 * Add todo
 */

const addTodo = (state, action) => {
    return R.append(action.payload, state);
}

/**
 * Delete todo
 */

const deleteTodo = (state, action) => {
    return R.reject(R.pathEq(['id'], action.payload), state);
}

/**
 * Reducer
 */

export default function todos(state = defaultTodos, action) {
    switch (action.type) {
        case ADD_TODO:
            return addTodo(state, action);
        case DELETE_TODO:
            return deleteTodo(state, action);
        default:
            return state;
    }
}
