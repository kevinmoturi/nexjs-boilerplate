import { createSlice } from '@reduxjs/toolkit';
export const BreedSlice = createSlice({
  name: 'breeds',

  initialState: {
    breeds: [],
    count: 0
  },

  reducers: {
    setBreedsData: (state, action) => {
        state.breeds = action.payload;
    },
    increment: (state) => {
        state.count = state.count + 1
    }
  }
});

export const { setBreedsData, increment } = BreedSlice.actions;

export default BreedSlice.reducer;