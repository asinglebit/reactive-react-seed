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

import * as Actions from 'actions';

/**
 * Components
 */

import {
    Button,
    Todos
} from 'components';

/**
 * App container definition
 */

class App extends Component {

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
        return (
            <div className="app">
              <Todos todos={this.props.todos} deleteTodo={this.deleteTodo}/>
              <Button click={this.addTodo} title="Add todo"/>
              <Button click={this.addEpicTodo} title="Add epic todo"/>
            </div>
        );
    }
}

App.propTypes = {
    actions: React.PropTypes.objectOf(React.PropTypes.function),
    todos: React.PropTypes.object
};


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
