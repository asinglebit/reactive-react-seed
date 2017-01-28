/**
* Libraries
*/

import React from 'react';

/**
* Todos component definition and export
*/

export const Todos = props => 
  <div>
    {
      props.todos.map(
      todo => {
          return <div key={ todo.id }>{ todo.id } : { todo.text }</div>
        }
      )
    }
  </div>