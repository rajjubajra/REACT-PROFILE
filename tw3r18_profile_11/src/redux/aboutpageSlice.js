import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from './config';


export const actionAboutPage = createAsyncThunk("about_page/getAboutPage", async () => {
  return axios({
    method: 'GET',
    url: `${baseurl.URL}/jsonapi/block_content/about_page?include=field_skill_and_tools,field_how_do_i_work.field_project_steps`,
    headers: {
      'Accept': 'application/vnd.api+json'
    }
  }).then(response => response.data).catch(err => { console.error(err)})
})


const aboutpageSlice = createSlice({
  name: 'about_page',
  initialState:{
    aboutpage: [],
    aboutpage_loading: false,
    aboutpage_fetched: false,
  },

  extraReducers:{
    [actionAboutPage.pending]: (state) => {
      state.aboutpage_loading = true;
    },
    [actionAboutPage.fulfilled]: (state,action) => {
      console.log(action.payload);
      state.aboutpage_loading = false;
      state.aboutpage = action.payload;
      state.aboutpage_fetched = true;
    },
    [actionAboutPage.rejected]: (state) => {
      state.aboutpage_loading = false;
      state.aboutpage_fetched = false;
    },
  },
})

// Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default aboutpageSlice.reducer