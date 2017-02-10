/* @flow */

/**
 * Libraries
 */

import React, {
    Component
} from 'react';
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux';

/**
 * Types
 */

import type {
    TodoType
} from "../../types";

/**
 * Selectors
 */

import * as Selectors from '../../selectors';

/**
 * Actions
 */

import * as Actions from '../../actions';

/**
 * Components
 */

import {
    Button,
    Todos,
    Composite
} from '../../components';

/**
 * App container definition
 */

export class App extends Component < AppDefaultPropsTypes, AppPropsTypes, void > {

    /**
     * Static fields
     */

    static defaultProps = {
        Todos,
        Button
    }

    /**
     * Constructor
     */

    constructor(props: AppPropsTypes) {
        super(props);
    }

    /**
     * Methods
     */

    addTodo = () => {
        this.props.actions.addTodo({
            id: Math.random().toString(),
            text: 'Do something'
        });
    }

    addEpicTodo = () => {
        this.props.actions.addEpicTodo({
            id: Math.random().toString(),
            text: 'Do something'
        });
    }

    addEpicHttpTodo = () => {
        this.props.actions.addEpicHttpTodo();
    }

    deleteTodo = (id: string) => {
        this.props.actions.deleteTodo(id);
    }

    /**
     * Markup
     */

    render() {
        const Todos = this.props.Todos;
        const Button = this.props.Button;
        return (
            <div>
              <Todos todos={this.props.todos} deleteTodo={this.deleteTodo}/>
              <Button handleClick={this.addTodo} title="Add todo"/>
              <Button handleClick={this.addEpicTodo} title="Add epic todo"/>
              <Button handleClick={this.addEpicHttpTodo} title="Add epic http todo"/>
            </div>
        );
    }
}

/**
 * Prop types
 */

export type AppPropsTypes = {
    actions: any,
    todos: Array < TodoType > ,
    Todos: (x: any) => any,
    Button: (x: any) => any
}

export type AppDefaultPropsTypes = {
    Todos: (x: any) => any,
    Button: (x: any) => any
}

/**
 * Store bindings
 */

export default connect(
    (state) => {
        return {
            todos: Selectors.getTodosComplexSelector(state)
        };
    },
    (dispatch) => {
        return {
            actions: bindActionCreators(Actions, dispatch)
        };
    }
)(App);
