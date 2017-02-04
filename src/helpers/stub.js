/**
 * Libraries
 */

import React, {
    Component
} from 'react';

/**
 * Stub a react component
 */

export function stub(realComponent) {
    let name;
    if (realComponent.name) {
        name = realComponent.name; // ES6 class name
    } else if (realComponent.constructor) {
        name = realComponent.constructor.name;
    }
    if (!name) {
        name = 'object';
    }
    name = `reactStub:${name}`;

    class ReactStub extends Component {
        constructor(props) {
            super(props);
            validateReactProps(props, realComponent, {
                name
            });
        }
        render() {
            return <span>This is a stub component</span>;
        }
    }

    return ReactStub;
}

/**
 * Validate props
 */

function validateReactProps(props, realComponent, {
    name
} = {}) {
    var propTypes = realComponent.propTypes || {};
    var defaultProps = realComponent.defaultProps || {};
    var effectiveProps = {...defaultProps,
        ...props
    };

    Object.keys(props).forEach((key) => {
        if (typeof propTypes[key] === 'undefined' && key !== 'children') {
            throw new Error(`${name} does not accept property ${key}`);
        }
    });
}
