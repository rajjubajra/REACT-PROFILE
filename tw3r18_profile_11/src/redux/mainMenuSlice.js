import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from './config';


export const actionMainMenu = createAsyncThunk("main_menu/getMainMenu", async () => {
  return axios({
    method: 'GET',
    url: `${baseurl.URL}/jsonapi/menu_items/main`,
    headers: {
      'Accept': 'application/vnd.api+json'
    }
  }).then(response => response.data).catch(err => { console.error(err)})
})


const mainMenuSlice = createSlice({
  name: 'main_menu',
  initialState:{
    mainmenu: [],
    loading: false,
    fetched: false,
    localhost: window.location.origin === 'http://localhost:3000' ? true : false,
  },

  extraReducers:{
    [actionMainMenu.pending]: (state) => {
      state.loading = true;
    },
    [actionMainMenu.fulfilled]: (state,action) => {
      state.loading = false;
      state.mainmenu = action.payload.data;
      state.fetched = true;
    },
    [actionMainMenu.rejected]: (state,action) => {
      state.loading = false;
      state.fetched = false;
    },
  },
})

// Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default mainMenuSlice.reducer