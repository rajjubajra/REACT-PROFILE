import {createSlice} from '@reduxjs/toolkit';


export const pageLoadSlice = createSlice({
  name: 'pageLoad',
  initialState:{
    count: 0,
  },
  reducers:{
      actionLoadCount: (state,action) => {
        state.count =   action.payload + 1
      },
  },
})

// Action creators are generated for each case reducer function
export const { actionLoadCount } =  pageLoadSlice.actions
export default pageLoadSlice.reducer