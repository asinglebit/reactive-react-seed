/**
* Libraries
*/

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
* Actions
*/

import * as Actions from 'actions';

/**
* Components
*/

import { Todos } from 'components';

/**
* App container definition
*/

class App extends Component {

  componentWillMount() {
    const { actions } = this.props;
    actions.addTodo({
      id: 0,
      text: 'Do something'
    });
    actions.addTodo({
      id: 1,
      text: 'Do something else'
    });
  }

  render() {
    return (
      <div className="app">
        <Todos todos={this.props.todos}/>
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
    }
  },
  (dispatch) => {
    return {
      actions: bindActionCreators(Actions, dispatch)
    }
  }
)(App);