import {createStore, applyMiddleware, combineReducers} from 'redux';
import { createLogger} from 'redux-logger';
import thunk from 'redux-thunk';


import {
  reducerNav,

} from './reducers';


const reducers =  combineReducers(
  {
    reducerNav,
  }
  
);


const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducers, middleware);