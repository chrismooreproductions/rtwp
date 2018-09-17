import logger from 'redux-logger';
import { applyMiddleware, createStore, compose } from 'redux';
import { reducer, State } from '../reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';

/*
 * Create store using State interface
 * store is type of State defined in our reducers
 */
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

export default store;
