import { createSlice } from "@reduxjs/toolkit";
import products from "../data/data";

const cartItems = products.map((item) => {
  return { ...item, amount: 0 };
});

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
};


export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increament: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItem.amount += 1;
    },
    decreament: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItem.amount -= 1;
    }
  },
});

export const { increament, decreament, calculateTotals } = counterSlice.actions;
export default counterSlice.reducer;
