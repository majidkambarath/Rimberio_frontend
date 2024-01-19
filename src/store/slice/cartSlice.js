import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, item, quantity } = action.payload;
      const existingItemIndex = state.carts.findIndex(
        (cartItem) => cartItem.id === id
      );

      if (existingItemIndex !== -1) {
        state.carts[existingItemIndex].quantity += quantity;
      } else {
        state.carts.push({ id, item, quantity });
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
