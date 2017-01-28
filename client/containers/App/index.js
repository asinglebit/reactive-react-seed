/**
* Libraries
*/

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
* Actions
*/

import * as AppActions from 'actions';

/**
* Styles
*/

import './style.css';

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
    const {
      todos
    } = this.props;

    return (
      <div className="viewport">
        <div>Todos:</div>
        {
          todos.map(
          todo => {
              return <div key={todo.id}>{todo.id}:{todo.text}</div>
            }
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);