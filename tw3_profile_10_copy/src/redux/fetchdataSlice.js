import { createSlice } from '@reduxjs/toolkit';


export const fetchDataSlice = createSlice({
  name: 'fetchdata',
  initialState: {
    value: [],
  },
  reducers: {

    actionFetchData:(state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { actionFetchData } = fetchDataSlice.actions

export default fetchDataSlice.reducer