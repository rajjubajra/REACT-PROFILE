import {createStore, applyMiddleware, combineReducers} from 'redux';
import { createLogger} from 'redux-logger';
import thunk from 'redux-thunk';


import {
  reducerNav,
  reducerPage,

} from './reducers';


const reducers =  combineReducers(
  {
    reducerNav,
    reducerPage
  }
  
);


const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducers, middleware);