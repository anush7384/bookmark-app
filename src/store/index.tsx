import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import createSagaMiddleware from "redux-saga";

import saga from './saga/index';
import combineReducers from './reducer/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers,applyMiddleware(logger,sagaMiddleware));

sagaMiddleware.run(saga);

export default store;
