import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodosApp from '../components/Todos';
import AnotherPage from '../components/AnotherPage';
import Navbar from '../components/Navbar';

const routes = (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/another-page" component={AnotherPage} />
        <Route path="/app" component={TodosApp} />
      </Switch>
    </div>
  </Router>
)

export default routes;
