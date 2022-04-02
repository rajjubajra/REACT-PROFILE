import { createSlice } from '@reduxjs/toolkit';


export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    value: [],
  },
  reducers: {

    navigationData:(state, action) => {
      state.value = action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { navigationData } = navigationSlice.actions

export default navigationSlice.reducer