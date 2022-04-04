import {createSlice} from '@reduxjs/toolkit';

export const localORremoteSlice = createSlice({
  name: 'hosting_origin',
  initialState:{
    origin_local: true,
  },
  reducers:{
      actionHostingOrigin: (state) => {
        state.origin = window.location.origin === 'http://localhost:3000' ? true : false;
        console.log("origin_local:", state.origin);
      },
  },
})

// Action creators are generated for each case reducer function
export const { actionHostingOrigin } =  localORremoteSlice.actions
export default localORremoteSlice.reducer