/* @flow */

/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './todos.style.scss';

/**
 * Types
 */

import type {
    TodoType
} from "../../types";

/**
 * Components
 */

import {
    Todo
} from '../../components';

/**
 * Todos component definition and export
 */

export const Todos = (props: TodosPropsType) => (
    <div className="todos">
		{
			props.todos.map(todo => (
				<Todo key={'todo_' + todo.id} id={todo.id} text={todo.text} deleteTodo={props.deleteTodo}/>)
			)
		}
	</div>
);

/**
 * Prop types
 */

export type TodosPropsType = {
    todos: Array < TodoType > ,
    deleteTodo: (x: string) => void
};
