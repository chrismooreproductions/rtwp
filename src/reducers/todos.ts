import { ActionTypes, Action } from '../actions/todos';
import Todo from '../models/Todo';

// Define the state interface for the current reducer

export interface State {
    todos: Todo[];
}

// Define the inital state...
export const initialState: State = {
    todos: [],
};

/*
 * Reducer: the reducer takes 2 arguements
 * state: the state of the reducer
 * action: the action to be performed
 */
export function reducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.ADD_TODO: {
            const todo = action.payload.todo;

            return {
                ...state,
                todos: [...state.todos, todo],
            };
        }

        case ActionTypes.TOGGLE_TODO: {
            const { todoId } = action.payload;
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === todoId ? { ...todo, done: !todo.done } : todo),
            };
        }

        default:
            return state;
    }
}
