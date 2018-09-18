import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps
} from 'react-router-dom';
import TodosApp from './Todos';

interface OneProps extends RouteComponentProps<any, any> {}
const One: React.StatelessComponent<{}> = () => { console.log('page one loaded'); return(<h1>One</h1>) };
interface TwoProps extends RouteComponentProps<any, any> {}
const Two: React.StatelessComponent<{}> = () => { return(<h1>Two</h1>) };
const Routes = () =>
  <Router>
      <div>
          <Route path="/app" component={TodosApp} />
      </div>
  </Router>

export default Routes;