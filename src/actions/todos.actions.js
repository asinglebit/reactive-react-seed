/* @flow */

/**
 * Types
 */

import type {
    Todo
} from "../types";

/**
 * Actions
 */

export const ADD_TODO: string = 'ADD_TODO';
export function addTodo(todo: Todo) {
    return {
        type: ADD_TODO,
        payload: todo
    };
}

export const ADD_EPIC_TODO: string = 'ADD_EPIC_TODO';
export function addEpicTodo(todo: Todo) {
    return {
        type: ADD_EPIC_TODO,
        payload: todo
    };
}

export const ADD_EPIC_HTTP_TODO: string = 'ADD_EPIC_HTTP_TODO';
export function addEpicHttpTodo() {
    return {
        type: ADD_EPIC_HTTP_TODO
    };
}

export const DELETE_TODO: string = 'DELETE_TODO';
export function deleteTodo(id: number) {
    return {
        type: DELETE_TODO,
        payload: id
    };
}
