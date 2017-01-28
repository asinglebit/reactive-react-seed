/*
* Libraries
*/

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

/*
* Reducers
*/

import rootReducer from 'reducers';
import rootEpic from 'epics';

/*
* Wiring the store
*/

const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(rootReducer, applyMiddleware(epicMiddleware)); 

/*
* Exports
*/

export default store;