import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Categories: '', 
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.Categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;