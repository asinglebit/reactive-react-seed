import chai from "chai";
import jsxChai from "jsx-chai";

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import shallowTestUtils from "react-shallow-testutils";

import {
    Button
} from './index';

chai.use(jsxChai);

const expect = chai.expect;

describe('root', function() {
    it('renders without problems', function() {
        const renderer = TestUtils.createRenderer();
        const click = () => alert('1');
        renderer.render(
            <Button handleClick={click} title="3333333333323"/>
        );
        const button = renderer.getRenderOutput();
        expect(button.props.onClick).to.equal(click);
        expect(button.props.children).to.equal("3333333333323");
    });
});
