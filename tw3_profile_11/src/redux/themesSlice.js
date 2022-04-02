import {createSlice} from '@reduxjs/toolkit';



export const themesSlice = createSlice({
  name: 'theme_gallery',
  initialState:{
    value: true
  },
  reducers:{
      actionGetThemeData: (state, action) => {
        console.log(action.payload);
      state.value = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { actionGetThemeData } =  themesSlice.actions
export default themesSlice.reducer