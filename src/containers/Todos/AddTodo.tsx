import { connect } from 'react-redux';
import { addTodo } from '../../actions/todos';
import AddTodoForm from '../../components/Todos/AddTodoForm';
import { withRouter } from 'react-router-dom';

export default withRouter(connect<any, any, any>(null, {
    handleSubmit: addTodo,
})(AddTodoForm));
