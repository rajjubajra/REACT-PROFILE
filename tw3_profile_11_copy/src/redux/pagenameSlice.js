import {createSlice} from '@reduxjs/toolkit';



export const pagenameSlice = createSlice({
  name: 'isHomepage',
  initialState:{
    value: true,
  },
  reducers:{
      actionSetPage: (state, action) => {
        console.log(action.payload);
        state.value = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { actionSetPage, actionFirstLoad } =  pagenameSlice.actions
export default pagenameSlice.reducer