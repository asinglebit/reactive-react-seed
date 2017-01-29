/**
 * Libraries
 */

import React from "react";
import ReactDOM from "react-dom";

/**
 * Store
 */

import {
    Provider
} from 'react-redux';
import store from '../../store';

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
    App
} from '../index';

/**
 * Test cases
 */

/**
 * TODO: Will need to implement the mocked store
 */

describe('App component', function() {
    it('Renders correctly', function() {
        const renderer = TestUtils.createRenderer();
        renderer.render(
            <Provider store={store}>
		        <App />
			</Provider>
        );
        const provider = renderer.getRenderOutput();
        expect(provider).to.exist;
    });
});
