/**
 * Libraries
 */

import React from 'react';

/**
 * Components
 */

import {
    Todo
} from '../../components';

/**
 * Todos component definition and export
 */

export const Todos = props =>
    <div className="todos">
		{ props.todos.map(todo =>
			<Todo key={'todo_' + todo.id} id={todo.id} text={todo.text} deleteTodo={props.deleteTodo}/>)
		}
	</div>;

/**
 * Prop types
 */

Todos.propTypes = {
    todos: React.PropTypes.array,
    deleteTodo: React.PropTypes.function
};
