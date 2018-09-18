import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps
} from 'react-router-dom';
import AddTodoForm from './components/Todos/AddTodoForm';

interface OneProps extends RouteComponentProps<any, any> {}
const One: React.StatelessComponent<{}> = () => { console.log('page one loaded'); return(<h1>One</h1>) };
interface TwoProps extends RouteComponentProps<any, any> {}
const Two: React.StatelessComponent<{}> = () => { return(<h1>Two</h1>) };
const SweetApp = () =>
  <Router>
      <div>
          <Route path="/one" component={One} />
          <Route path="/two" component={Two} />
          <Route path="/addtodo" component={AddTodoForm} />
      </div>
  </Router>

export default SweetApp;