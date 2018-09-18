// interface App {
//   color?: string
//   width?: number
// }

// function appInit(config: App): {color: string, area: number} {
//   let newSquare = { color: 'white', area: 100 }
//   if (config.color) {
//     newSquare.color = config.color
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width
//   }
//   return newSquare
// }

// let blackSquare = appInit({ color: 'black' })
// let blueSquare = appInit({ color: 'blue', width: 20 })
// let redSquare = appInit({ color: 'red' })

// console.log(blackSquare)
// console.log(blueSquare)
// console.log(redSquare)

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { reducer, State } from './reducers';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import App from './App';
// import store from './store';
import './index.css';
import logger from 'redux-logger';

const history = createBrowserHistory();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore<State, any, any, any>(
    connectRouter(history)(reducer), 
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            logger
        )
    )
);
// export default store;

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    document.getElementById('app') as HTMLElement
);

