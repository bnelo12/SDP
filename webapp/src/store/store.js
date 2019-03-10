import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import user from './user/reducer';
import browseItems from './browseItems/reducer';
import cart from './cart/reducer';

const middlewares = [thunkMiddleware, logger];

const rootReducer = combineReducers(
    {user, browseItems, cart}
)

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)

export default store;