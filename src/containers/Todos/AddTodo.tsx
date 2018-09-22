import { connect } from 'react-redux';
import { addTodo } from '../../store/actions/todos';
import AddTodoForm from '../../components/Todos/AddTodoForm';
import { withRouter } from 'react-router';

export default withRouter(connect<any, any, any>(null, {
    handleSubmit: addTodo,
})(AddTodoForm));
