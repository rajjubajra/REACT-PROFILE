import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from './config';


export const actionAskMeForm = createAsyncThunk("askme_form/askmeform", 

  async () => {
    return axios({
    method: 'GET',
      url: `${baseurl.URL}/session/token`,
      headers: {
        'Content-Type':'application/vnd.api+json'
        }
      })
      .then(res => { 
        return axios({
          method: 'GET',
          url: `${baseurl.URL}/jsonapi/webform_submission/ask_me_form?include=webform_id`,
          headers: {
                'Content-Type': 'application/vnd.api+json',
                'X-CSRF-Token': res.data,
                'Authorization': 'Basic cmFqanU6Q2F0bWFuZG8hOTg0MQ=='
              }
            })
            .then(response => response.data)
          })
          .catch(err => console.error(err))

})


const askMeFormSlice = createSlice({
  name: 'askme_form',
  initialState:{
    askmeform: [],
    askmeform_loading: false,
    askmeform_fetched: false,
  },

  extraReducers:{
    [actionAskMeForm.pending]: (state) => {
      state.askmeform_loading = true;
    },
    [actionAskMeForm.fulfilled]: (state,action) => {
      console.log(action.payload);
      state.askmeform_loading = false;
      state.askmeform = action.payload;
      state.askmeform_fetched = true;
    },
    [actionAskMeForm.rejected]: (state) => {
      state.askmeform_loading = false;
      state.askmeform_fetched = false;
    },
  },
})

// Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default askMeFormSlice.reducer