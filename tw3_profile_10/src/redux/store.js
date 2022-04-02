
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import navigationReducer from './navigationSlice';
import fetchdataReducer from './fetchdataSlice';
import landingImagesReducer from './landingImagesSlice'; /** any name works fine  */

export default configureStore({
  reducer: {
    counter: counterReducer,
    navigation: navigationReducer,
    fetchdata: fetchdataReducer,
    landingImages: landingImagesReducer /** name of the Slice: anyname */  
  },
})