import {configureStore} from '@reduxjs/toolkit';
import isHomepageReducer from './pagenameSlice';
import getThemeDataReducer from './themesSlice';
import getPageLoadReducer from './pageLoadSlice';
import fetchDataReducer from './fetchDataSlice';

export const store = configureStore({
  reducer:{
    isHomepage: isHomepageReducer,
    theme_gallery: getThemeDataReducer,
    pageLoad: getPageLoadReducer,
    fetch_data:fetchDataReducer
  }
})