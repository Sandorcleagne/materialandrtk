import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  cartQty: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQty += 1;
      } else {
        state.cart.push({ ...action.payload, cartQty: 1 });
      }
    },
  },
});
export const cartReducer = CartSlice.reducer;
export const { addToCart } = CartSlice.actions;
