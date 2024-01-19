import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prices: "", 
};

const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setPriceDate: (state, action) => {
      state.prices = action.payload;
    },
  },
});

export const { setPriceDate } = priceSlice.actions;

export default priceSlice.reducer;