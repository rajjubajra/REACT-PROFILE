import {configureStore} from '@reduxjs/toolkit';
import isHomepageReducer from './pagenameSlice';
import getPageLoadReducer from './pageLoadSlice';

export const store = configureStore({
  reducer:{
    isHomepage: isHomepageReducer,
    pageLoad: getPageLoadReducer,
  }
})