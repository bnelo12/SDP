import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import user from './user/reducer';
import toasts from './toasts/reducer';

const middlewares = [thunkMiddleware, logger];

const rootReducer = combineReducers(
    {user, toasts}
)

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)

export default store;