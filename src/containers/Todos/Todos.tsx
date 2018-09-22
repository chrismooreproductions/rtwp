import { connect } from 'react-redux';
import { State } from '../../store/reducers';
import { getTodos } from '../../store/selectors/todos';
import { toggleTodo } from '../../store/actions/todos';
import TodosList from '../../components/Todos/TodosList';
import { withRouter } from 'react-router';

const mapStateToProps = (state: State) => ({
    todos: getTodos(state),
});

const mapDispatchToProps = {
    onTodoClicked: toggleTodo,
};

export default withRouter(connect<any, any, any>(mapStateToProps, mapDispatchToProps)(TodosList));
