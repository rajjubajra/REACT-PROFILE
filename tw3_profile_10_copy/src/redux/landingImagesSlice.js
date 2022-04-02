import { createSlice } from '@reduxjs/toolkit';


export const landingImagesSlice = createSlice({
  name: 'landingImages',
  initialState: {
    value: [],
  },
  reducers: {

    actionLandingImages:(state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { actionLandingImages } = landingImagesSlice.actions

export default landingImagesSlice.reducer