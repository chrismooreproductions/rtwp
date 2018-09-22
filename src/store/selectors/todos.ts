import { State } from '../reducers';
import { createSelector } from 'reselect';

const getTodosState = ((state: State) => state.todos);

/*
 * get todos array from todos state...
 */
export const getTodos = createSelector([getTodosState], s => s.todos);
