import * as React from 'react';
import { Route, Switch } from 'react-router';
import TodosApp from './Todos';
import Home from './Home';
import Navbar from './Navbar';

// interface OneProps extends RouteComponentProps<any, any> {}
// const One: React.StatelessComponent<{}> = () => { console.log('page one loaded'); return(<h1>One</h1>) };
// interface TwoProps extends RouteComponentProps<any, any> {}
// const Two: React.StatelessComponent<{}> = () => { return(<h1>Two</h1>) };

// const Routes = () =>
//   <Router>
//       <div>
//           <Route path="/app" component={TodosApp} />
//       </div>
//   </Router>

// export default Routes;

const Routes = (
  <div>
    <Navbar />
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/app" component={TodosApp} />
    </Switch>
  </div>
)

export default Routes;
