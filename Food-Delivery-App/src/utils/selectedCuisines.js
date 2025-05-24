import { createSlice } from '@reduxjs/toolkit';

const selectedCuisineSlice = createSlice({
  name: 'selectedCuisine',
  initialState: {
    cuisine: null
  },
  reducers: {
    setCuisine: (state, action) => {
      state.cuisine = action.payload;
    }
  }
});

export const { setCuisine } = selectedCuisineSlice.actions;
export default selectedCuisineSlice.reducer;
