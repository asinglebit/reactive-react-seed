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
import store from './store';

/**
 * Styles
 */

import './static/styles/main.scss';

/**
 * Containers
 */

import {
    App
} from './containers';

/**
 * Entry point
 */

ReactDOM.render(
    <Provider store={store}>
        <App />
	</Provider>,
    document.getElementById('root')
);
