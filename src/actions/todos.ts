import Todo from '../models/Todo';

/*
 * In order to automatically generate id for our todos
 */
let nextId = 0;

/*
 * Action Types
 * We will define the action name constants
 * here using Typescript enum
 */

export enum ActionTypes {
    ADD_TODO = '[todos] ADD_TODO',
    TOGGLE_TODO = '[todos] TOGGLE_TODO',
}

/*
 * Action Interfaces
 * Here we will define the return types of the actions
 */

export interface AddTodoAction { type: ActionTypes.ADD_TODO; payload: { todo: Todo }; }
export interface ToggleTodoAction { type: ActionTypes.TOGGLE_TODO; payload: { todoId: number }; }

/*
 * Action Creators
 * Here we will define the action creators
 */
export function addTodo(name: string): AddTodoAction {
    return {
        type: ActionTypes.ADD_TODO,
        payload: {
            todo: {
                id: nextId++,
                name: name,
                done: false,
            },
        },
    };
}

export function toggleTodo(todoId: number): ToggleTodoAction {
    return { type: ActionTypes.TOGGLE_TODO, payload: {todoId} };
}

/*
 * Define the action types her
 */
export type Action = AddTodoAction | ToggleTodoAction;
