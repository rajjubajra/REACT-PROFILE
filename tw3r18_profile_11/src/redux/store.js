import {configureStore} from '@reduxjs/toolkit';
import isHomepageReducer from './pagenameSlice';
import getPageLoadReducer from './pageLoadSlice';
import fetchDataReducer from './fetchDataSlice';
import fetchMainMenuReducer from './mainMenuSlice';
import fetchThemeGallery from './themeGalleryListSlice';
import fetchAboutPageReducer from './aboutpageSlice';

export const store = configureStore({
  reducer:{
    isHomepage: isHomepageReducer,
    pageLoad: getPageLoadReducer,
    fetch_data:fetchDataReducer,
    main_menu: fetchMainMenuReducer,
    theme_gallery: fetchThemeGallery,
    about_page: fetchAboutPageReducer,
  }
})