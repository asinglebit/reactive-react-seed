/**
* Actions
*/

export const ADD_TODO = 'ADD_TODO';
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}


export const ADD_EPIC_TODO = 'ADD_EPIC_TODO';
export function addEpicTodo(todo) {
  return {
    type: ADD_EPIC_TODO,
    payload: todo
  };
}

export const DELETE_TODO = 'DELETE_TODO';
export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  };
}