import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import user from './user/reducer';
import browseItems from './browseItems/reducer';
import cart from './cart/reducer';
import queue from './queue/reducer';
import items from './items/reducer';
import order from './order/reducer';
import returnItems  from './return/reducer';
import collect from './collect/reducer';

const middlewares = [thunkMiddleware, logger];

const rootReducer = combineReducers(
    {user, browseItems, cart, queue, items, order, returnItems, collect}
)

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)

export default store;