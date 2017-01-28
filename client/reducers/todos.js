/*
* Libraries
*/

import { combineReducers } from 'redux';

/*
* Actions
*/

import {
  ADD_TODO,
  DELETE_TODO,
} from 'actions';

/*
* Default state
*/

const defaultTodos = [];

/**
 * Reducer
 */

export default function todos(state = defaultTodos, action) {
  let newState;
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      let newState = [];
      for (i = 0; i < state.length; ++i) {
        if (state[i].id !== action.payload) {
          newState.push(Object.assign({}, state[i]));
        }
      }
      return newState;
    default:
      return state;
  }
}