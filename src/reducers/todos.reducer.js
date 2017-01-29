/*
 * Actions
 */

import {
    ADD_TODO,
    DELETE_TODO
} from '../actions';

/*
 * Default state
 */

const defaultTodos = [];

/**
 * Add todo
 */

const addTodo = (state, action) => [...state, action.payload];

/**
 * Delete todo
 */

const deleteTodo = (state, action) => {
    let newState = [];
    for (let i = 0; i < state.length; ++i) {
        if (state[i].id !== action.payload) {
            newState.push(Object.assign({}, state[i]));
        }
    }
    return newState;
};

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
