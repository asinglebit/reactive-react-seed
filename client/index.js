/**
 * Libraries
 */

import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Store
 */

import {
    Provider
} from 'react-redux';
import store from 'store';

/**
 * Containers
 */

import {
    App
} from 'containers';

/**
 * Template
 */

import 'index.html';

/**
 * Entry point
 */

ReactDOM.render(
    <Provider store={store}>
    	<App />
	</Provider>,
    document.getElementById('app')
);
