import * as React from 'react';
import AddTodo from '../../containers/Todos/AddTodo';
import Todos from '../../containers/Todos/Todos';

class TodosApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Todos</h1>
                <AddTodo />
                <Todos />
            </div>
        );
    }
}

export default TodosApp;
