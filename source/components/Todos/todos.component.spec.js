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
    Todos
} from '../index';

/**
 * Test cases
 */

describe('Todos component', function() {
    it('Renders correctly', function() {
        const renderer = TestUtils.createRenderer();
        const clickHandler = () => {};
        renderer.render(
            <Todos todos={[]} deleteTodo={clickHandler}/>
        );
        const todos = renderer.getRenderOutput();
        expect(todos.props.className).to.equal('todos');
    });
});
