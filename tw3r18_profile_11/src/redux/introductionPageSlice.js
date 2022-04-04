import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from './config';



export const actionIntroduction = createAsyncThunk("introduction_page/getIntroduction", async () => {
  return axios({
    method: 'GET',
    url: `${baseurl.URL}/jsonapi/block_content/yw_introduction?fields[block_content--yw_introduction]=body`,
    headers: {
      'Accept': 'application/vnd.api+json'
    }
  })
  .then(response => response.data)
  .catch(err => { console.error(err)})
})


const IntroductionPageSlice = createSlice({
  name: 'introduction_page',
  initialState:{
    getIntroduction: [],
    introduction_loading: false,
    introduction_fetched: false,
  },

  extraReducers:{
    [actionIntroduction.pending]: (state) => {
      state.introduction_loading = true;
    },
    [actionIntroduction.fulfilled]: (state,action) => {
      console.log(action.payload);
      state.introduction_loading = false;
      state.getIntroduction = action.payload;
      state.introduction_fetched = true;
    },
    [actionIntroduction.rejected]: (state) => {
      state.introduction_loading = false;
      state.introduction_fetched = false;
    },
  },
})

// Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default IntroductionPageSlice.reducer