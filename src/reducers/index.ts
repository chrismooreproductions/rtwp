import * as fromTodos from './todos';
import { combineReducers } from 'redux';
import { RouterState } from 'connected-react-router';
import Todo from '../models/Todo';

/*
 * This is the root state of the app
 * It contains every substate of the app
 */
export interface State {
    todos: fromTodos.State;
}

/*
 * initialState of the app
 */
export const initialState: State = {
    todos: fromTodos.initialState,
};

/*
 * Root reducer of the app
 * Returned reducer will be of type Reducer<State>
 */
export const reducer = combineReducers({
    todos: fromTodos.reducer,
});
