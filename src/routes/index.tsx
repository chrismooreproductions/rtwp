import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodosApp from '../components/Todos';
import AnotherPage from '../components/AnotherPage';
import DfmeaLayout from '../layouts';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import { buttonDefinition } from '../config';

export const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
    type: "dark",
  },
});

const routes = (
  <Router>
    <div>
      <Switch>
        <Route path="/another-page" component={AnotherPage} />
        <Route path="/app" component={TodosApp} />
        <Route path="/dfmea/:system?" component={DfmeaLayout} />
      </Switch>
    </div>
  </Router>
)

export default routes;
