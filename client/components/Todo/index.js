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
 * Todo component definition and export
 */

export const Todo = props =>
    <div key = { props.id } className = "todo">
    <span> { props.id }: { props.text } </span>
    <Button click = { () => props.deleteTodo(props.id) } title = "X" />
    </div>
