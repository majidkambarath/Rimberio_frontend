import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log("Action Payload:", action.payload);
      console.log("Current State:", state);
      const { id, item, quantity } = action.payload;
      console.log(typeof(id))
      const existingItemIndex = state.carts.findIndex(
        (cartItem) => cartItem.id === id
      );

      if (existingItemIndex !== -1) {
        state.carts[existingItemIndex].quantity += quantity;
      } else {
        state.carts.push({ id, item, quantity });
      }
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItemIndex = state.carts.findIndex(
        (cartItem) => cartItem.id === id
      );

      if (existingItemIndex !== -1) {
        state.carts[existingItemIndex].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItemIndex = state.carts.findIndex(
        (cartItem) => cartItem.id === id
      );

      if (
        existingItemIndex !== -1 &&
        state.carts[existingItemIndex].quantity > 1
      ) {
        state.carts[existingItemIndex].quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.carts.findIndex((cartItem) => cartItem.id === id);

      if (itemIndex !== -1) {
        state.carts.splice(itemIndex, 1);
      }
    },
  },
});

export const { addItem, incrementQuantity, decrementQuantity , removeItem } =  cartSlice.actions;

export default cartSlice.reducer;
