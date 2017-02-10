/**
 * Actions
 */

import * as todosActions from '../actions/todos.actions';


/**
 * Reducer
 */

import todos from './todos.reducer';

/**
 * Test cases
 */

describe('Todos reducer', function() {
    it('Adds a todo correctly', function() {
        const result = todos([], todosActions.addTodo({
            id: 0,
            text: 'todo'
        }));
        expect(result[0].id).to.be.equal(0);
        expect(result[0].text).to.be.equal('todo');
    });
    
    it('Deletes a todo correctly', function() {
        const result = todos([{
            id: 0,
            text: 'todo'
        }], todosActions.deleteTodo(0));
        expect(result.length).to.be.equal(0);
    });
});
