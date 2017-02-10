/**
 * Libraries
 */

import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    browserHistory
} from 'react-router'

/**
 * Store
 */

import {
    Provider
} from 'react-redux';
import {
    syncHistoryWithStore
} from 'react-router-redux';
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
 * Components
 */

import {
    Button
} from './components';

/**
 * Create an enhanced history that syncs navigation events with the store
 */

const history = syncHistoryWithStore(browserHistory, store);

/**
 * Entry point
 */

ReactDOM.render(
    <Provider store={store}>
		<Router history={history}>
			<Route path="*" component={App}/>
		</Router>
	</Provider>,
    document.getElementById('root')
);
