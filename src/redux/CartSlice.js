import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
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
        toast.info("Increased Product Quantity", {
          position: "bottom-left",
        });
      } else {
        state.cart.push({ ...action.payload, cartQty: 1 });
        toast.success("Added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});
export const cartReducer = CartSlice.reducer;
export const { addToCart } = CartSlice.actions;
