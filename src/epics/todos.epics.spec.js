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

import 'babel-polyfill';
import chai from "chai";
import jsxChai from "jsx-chai";
chai.use(jsxChai);
const expect = chai.expect;

/**
 * Epics
 */

import todoEpics, {
    addEpicTodoAction,
    addEpicHttpTodoAction
} from './todos.epics';

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

    it('The flow of the add epic todo epic is correct', (done) => {
        const payload = {
            id: 123,
            text: "Epic todo"
        };

        const actions$ = ActionsObservable.of(todoActions.addEpicTodo(payload));
        addEpicTodoAction(actions$).subscribe(action => {
            expect(action.type).to.be.equal(todoActions.ADD_TODO);
            expect(action.payload).to.be.equal(payload);
            done();
        })
    });

    it('The flow of the add epic http todo epic is correct', (done) => {
        const actions$ = ActionsObservable.of(todoActions.addEpicHttpTodo());
        addEpicHttpTodoAction(actions$).subscribe(action => {
            expect(action.type).to.be.equal(todoActions.ADD_TODO);
            expect(action.payload.id).to.be.equal('1');
            expect(action.payload.text).to.be.equal('delectus aut autem');
            done();
        })
    });
});
