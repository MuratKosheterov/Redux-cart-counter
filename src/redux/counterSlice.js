import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: 0,
  cart: [],
  quantity:0,
  total: 0,
  price:0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state, action) => {
      state.data += 1;
    },
    decreament: (state, action) => {
      if (state.data > 0) state.data -= 1;
    },
  },
});

export const { increament, decreament } = counterSlice.actions;
export default counterSlice.reducer;
