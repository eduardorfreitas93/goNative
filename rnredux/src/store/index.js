/**
 * Configuração do state do app
 */

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
];

const createAppropriateStrore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropriateStrore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(sagas);

export default store;
