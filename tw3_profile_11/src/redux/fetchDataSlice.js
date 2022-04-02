import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchDataSlice = createSlice({
  name: 'fetch_data',
  initialState:{
    introduction: [],
  },
  reducers:{
      actionFetchIntroduction: (state, action) => {
        console.log(action.payload);
        axios({
          method:'GET',
          url: action.payload,
          headers: {
            'Accept': 'application/vnd.api+json'
          },
        })
        .then(response => console.log(response))
        .catch(err => console.log(err))

        state.introduction = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { actionFetchIntroduction } =  fetchDataSlice.actions
export default fetchDataSlice.reducer