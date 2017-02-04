/**
 * Libraries
 */

import configureMockStore from 'redux-mock-store';
import {
    combineEpics,
    createEpicMiddleware,
    ActionsObservable
} from 'redux-observable';

/**
 * Testing
 */

import chai from "chai";
import jsxChai from "jsx-chai";
chai.use(jsxChai);
const expect = chai.expect;

/**
 * Epics
 */

import todoEpics from './todos.epics';

/**
 * Actions
 */

import * as todoActions from '../actions/todos.actions';

/**
 * Setup store
 */

const combinedEpics = combineEpics(...todoEpics);
const epicMiddleware = createEpicMiddleware(combinedEpics);
const mockStore = configureMockStore([epicMiddleware]);

/**
 * Test cases
 */

describe('Todos epics', () => {
    let store;

    beforeEach(() => {
        store = mockStore();
    });

    afterEach(() => {
        epicMiddleware.replaceEpic(combinedEpics);
    });

    it('Adds epic todo correctly', (done) => {
        const payload = {
            id: 123,
            text: "Epic todo"
        };

        const actions$ = ActionsObservable.of(todoActions.addEpicTodo(payload));
        store.dispatch(todoActions.addEpicTodo(payload));

        todoEpics[0](actions$).subscribe(() => {
            expect(store.getActions().length).to.be.equal(2);
            expect(store.getActions()[0].type).to.be.equal(todoActions.ADD_EPIC_TODO);
            expect(store.getActions()[0].payload).to.be.equal(payload);
            expect(store.getActions()[1].type).to.be.equal(todoActions.ADD_TODO);
            expect(store.getActions()[1].payload).to.be.equal(payload);
            done();
        })
    });
});
