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

import fetchMock from 'fetch-mock';
import chai from 'chai';
import jsxChai from 'jsx-chai';
chai.use(jsxChai);
const expect = chai.expect;

/**
 * Epics
 */

import todoEpics, {
    addEpicTodoAction,
    addEpicHttpTodoAction
} from '../epics/todos.epics';

/**
 * Actions
 */

import * as todoActions from './todos.actions';

/**
 * Setup store
 */

const combinedEpics = combineEpics(...todoEpics);
const epicMiddleware = createEpicMiddleware(combinedEpics);
const mockStore = configureMockStore([epicMiddleware]);

/**
 * Test cases
 */

describe('Todos actions', () => {
    let store;

    beforeEach(() => {
        store = mockStore();
    });

    afterEach(() => {
        fetchMock.restore();
        epicMiddleware.replaceEpic(combinedEpics);
    });

    it('Executes add todo action correctly', () => {
        const payload = {
            id: 123,
            text: "Epic todo"
        };
        store.dispatch(todoActions.addTodo(payload));
        expect(store.getActions()[0].type).to.be.equal(todoActions.ADD_TODO);
        expect(store.getActions()[0].payload).to.be.equal(payload);
    });

    it('Executes first part of async add epic todo action correctly', () => {
        const payload = {
            id: 123,
            text: "Epic todo"
        };
        store.dispatch(todoActions.addEpicTodo(payload));
        expect(store.getActions()[0].type).to.be.equal(todoActions.ADD_EPIC_TODO);
        expect(store.getActions()[0].payload).to.be.equal(payload);
    });

    it('Executes nocked async add epic todo action correctly', (done) => {
        fetchMock.get('*', {
            id: 5,
            title: 'Http async title'
        });

        store.dispatch(todoActions.addEpicHttpTodo());
        setTimeout(() => {
            expect(store.getActions()[0].type).to.be.equal(todoActions.ADD_EPIC_HTTP_TODO);
            expect(store.getActions()[1].type).to.be.equal(todoActions.ADD_TODO);
            expect(store.getActions()[1].payload.id).to.be.equal('5');
            expect(store.getActions()[1].payload.text).to.be.equal('Http async title');
            done();
        }, 0);
    });

    it('Executes the delete todo action correctly', () => {
        const payload = {
            id: 123,
            text: "Todo"
        };
        store.dispatch(todoActions.addTodo(payload));
        store.dispatch(todoActions.deleteTodo(123));
        expect(store.getActions()[0].type).to.be.equal(todoActions.ADD_TODO);
        expect(store.getActions()[0].payload).to.be.equal(payload);
        expect(store.getActions()[1].type).to.be.equal(todoActions.DELETE_TODO);
        expect(store.getActions()[1].payload).to.be.equal(123);
    });
});
