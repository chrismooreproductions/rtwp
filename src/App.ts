import {History} from 'history'
import { ConnectedRouter } from 'connected-react-router'
import routes from './Routes'

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  )
}

export default App
