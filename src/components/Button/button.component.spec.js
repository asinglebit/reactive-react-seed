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
    Button
} from '../index';

/**
 * Test cases
 */

describe('Button component', function() {
    it('Acquires props correctly', function() {
        const renderer = TestUtils.createRenderer();
        const clickHandler = () => {};
        renderer.render(
            <Button handleClick={clickHandler} title="Button title"/>
        );
        const button = renderer.getRenderOutput();
        expect(button.props.onClick).to.equal(clickHandler);
        expect(button.props.children).to.equal("Button title");
    });
});
