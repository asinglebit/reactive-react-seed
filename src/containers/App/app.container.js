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
 * App container definition
 */

export class App extends Component {

    static propTypes = {
        actions: React.PropTypes.object,
        todos: React.PropTypes.array,

        // Child components

        Todos: React.PropTypes.func,
        Button: React.PropTypes.func
    }

    static defaultProps = {
        Todos,
        Button
    }

    constructor(props) {
        super(props);
    }

    addTodo = () => {
        this.props.actions.addTodo({
            id: Math.random(),
            text: 'Do something'
        });
    }

    addEpicTodo = () => {
        this.props.actions.addEpicTodo({
            id: Math.random(),
            text: 'Do something'
        });
    }

    deleteTodo = (id) => {
        this.props.actions.deleteTodo(id);
    }

    render() {
        const Todos = this.props.Todos;
        const Button = this.props.Button;
        return (
            <Composite>
              <Todos todos={this.props.todos} deleteTodo={this.deleteTodo}/>
              <Button handleClick={this.addTodo} title="Add todo"/>
              <Button handleClick={this.addEpicTodo} title="Add epic todo"/>
            </Composite>
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
