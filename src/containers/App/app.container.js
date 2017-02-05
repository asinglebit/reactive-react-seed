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
 * Prop types
 */

const props = {
    actions: React.PropTypes.object,
    todos: React.PropTypes.array
};

const defaults = {
    Todos,
    Button
};

/**
 * Dependency types
 */

const dependencies = {
    Todos: React.PropTypes.func,
    Button: React.PropTypes.func
};

/**
 * App container definition
 */

export class App extends Component {

    /**
     * Static fields
     */

    static propTypes = {
        ...props,
        ...dependencies
    }

    static defaultProps = {
        ...defaults
    }

    /**
     * Constructor
     */

    constructor(props) {
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

    deleteTodo = (id) => {
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
 * Store bindings
 */

export default connect(
    (state) => {
        return {
            todos: state.todos
        };
    },
    (dispatch) => {
        return {
            actions: bindActionCreators(Actions, dispatch)
        };
    }
)(App);
