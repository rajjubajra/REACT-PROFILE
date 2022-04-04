import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from './config';




export const actionThemeGallary = createAsyncThunk("theme_gallery/getThemeGallery", async () => {
  return axios({
    method: 'GET',
    url: `${baseurl.URL}/restapi-theme-listing-profile`,
    headers: {
      'Accept': 'application/vnd.api+json'
    }
  }).then(response => response.data).catch(err => { console.error(err)})
})


const themeGallerySlice = createSlice({
  name: 'theme_gallery',
  initialState:{
    themegallery: [],
    theme_loading: false,
    theme_fetched: false,
  },

  extraReducers:{
    [actionThemeGallary.pending]: (state) => {
      state.theme_loading = true;
    },
    [actionThemeGallary.fulfilled]: (state,action) => {
      console.log(action.payload);
      state.theme_loading = false;
      state.themegallery = action.payload;
      state.theme_fetched = true;
    },
    [actionThemeGallary.rejected]: (state) => {
      state.theme_loading = false;
      state.theme_fetched = false;
    },
  },
})

// Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default themeGallerySlice.reducer