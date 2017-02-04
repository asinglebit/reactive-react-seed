/**
 * Libraries
 */

import React, {
    Component
} from 'react';

/**
 * Composite component definition and export
 */

export class Composite extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
				{this.props.children}
			</div>
        );
    }
}
