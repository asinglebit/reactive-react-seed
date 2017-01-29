/**
 * Libraries
 */

import React from "react";
import ReactDOM from "react-dom";

/**
 * Testing
 */

import chai from "chai";
import jsxChai from "jsx-chai";
import TestUtils from "react-addons-test-utils";
import shallowTestUtils from "react-shallow-testutils";
chai.use(jsxChai);
const expect = chai.expect;

/**
 * Components
 */

import {
    Todo
} from '../index';

/**
 * Test cases
 */

describe('Todo component', function() {
    it('Renders correctly', function() {
        const renderer = TestUtils.createRenderer();
        const clickHandler = () => {};
        renderer.render(
            <Todo id="5" deleteTodo={clickHandler} text="Todo text"/>
        );
        const todo = renderer.getRenderOutput();
        expect(todo.props.className).to.equal('todo');
    });
});
