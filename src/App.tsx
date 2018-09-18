import React = require('react');
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './Routes';

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return (
    <div>
      <ConnectedRouter history={history}>
        { Routes }
      </ConnectedRouter>
    </div>
  );
}

export default App;
