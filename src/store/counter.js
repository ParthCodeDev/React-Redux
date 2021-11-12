import { createSlice } from "@reduxjs/toolkit";

const initialstate = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialstate,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state, action) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterAction = counterSlice.actions;


export default counterSlice.reducer;