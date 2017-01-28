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

export const DELETE_TODO = 'DELETE_TODO';
export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  };
}