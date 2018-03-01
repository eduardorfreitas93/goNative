/**
 * Configuração do state do app
 */

import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const middleware = [];

const createAppropriateStrore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropriateStrore(reducers, applyMiddleware(...middleware));

export default store;
