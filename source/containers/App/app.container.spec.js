/**
 * Libraries
 */

import React from 'react';
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

/**
 * Testing
 */

import chai from "chai";
import jsxChai from "jsx-chai";
chai.use(jsxChai);
const expect = chai.expect;

/**
 * Containers
 */

import {
    App
} from '../index';

/**
 * Components
 */

import {
    Button,
    Todos
} from '../../components';

/**
 * Helpers
 */

import {
    stub
} from '../../helpers';

/**
 * Test cases
 */

describe('App component', function() {
    let state, store, props;

    const StubButton = stub(Button);
    const StubTodos = stub(Todos);

    beforeEach(() => {
        state = {
            todos: [{
                id: 1,
                text: "Sample todo 1"
            }, {
                id: 2,
                text: "Sample todo 2"
            }, {
                id: 3,
                text: "Sample todo 3"
            }]
        };
        store = {
            subscribe: sinon.spy().named('subscribe'),
            dispatch: sinon.spy().named('dispatch'),
            getState: sinon.spy(() => state).named('getState')
        };
        props = {
            Button: StubButton,
            Todos: StubTodos
        }
    });

    it('Renders correctly', function() {
        const app = TestUtils.renderIntoDocument(<App store={store} {...props}/>);
        const todos = TestUtils.findRenderedComponentWithType(
            app,
            StubTodos
        );
        const buttons = TestUtils.scryRenderedComponentsWithType(
            app,
            StubButton
        );
        expect(todos.props.todos.length).to.be.equal(3);
        expect(buttons.length).to.be.equal(3);
    });
});
