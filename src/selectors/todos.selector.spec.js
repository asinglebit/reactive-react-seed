/**
 * Testing
 */

import chai from "chai";
import jsxChai from "jsx-chai";
chai.use(jsxChai);
const expect = chai.expect;

/**
 * Components
 */

import * as todosSelectors from '../selectors/todos.selector';

/**
 * Test cases
 */

describe('Todos selector', function() {
    let state, todos;

    beforeEach(() => {
        todos = [{
            id: 1,
            text: "Sample todo 1"
        }, {
            id: 2,
            text: "Sample todo 2"
        }, {
            id: 3,
            text: "Sample todo 3"
        }];
        state = {
            todos
        };
    });

    it('Todos simple selector selects correctly', function() {
        expect(todosSelectors.getTodosSimpleSelector(state)).to.equal(todos);
    });

    it('Todos complex selector selects correctly', function() {
        expect(todosSelectors.getTodosComplexSelector(state)).to.equal(todos);
    });
});
