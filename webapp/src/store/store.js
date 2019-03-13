import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import user from './user/reducer';
import browseItems from './browseItems/reducer';
import cart from './cart/reducer';
import queue from './queue/reducer';
import items from './items/reducer';

const middlewares = [thunkMiddleware, logger];

const rootReducer = combineReducers(
    {user, browseItems, cart, queue, items}
)

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)

export default store;