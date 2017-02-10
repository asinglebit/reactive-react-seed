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
        }
        render() {
            return <span>This is a stub component</span>;
        }
    }

    return ReactStub;
}
