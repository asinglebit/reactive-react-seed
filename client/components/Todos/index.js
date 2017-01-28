/**
* Libraries
*/

import React from 'react';

/**
* Components
*/

import {
  Button
} from '../../components';

/**
* Todos component definition and export
*/

const Todo = props => 
  <div key={ props.id } className="todo">
  	<span>{ props.id } : { props.text }</span>
  	<Button click={ () => props.deleteTodo(props.id) } title="X"/>
  </div>

export const Todos = props => 
  <div className="todos">
    {
      props.todos.map(todo => <Todo key={ 'todo_' + todo.id } id={ todo.id } text={ todo.text } deleteTodo={ props.deleteTodo }/>)
    }
  </div>