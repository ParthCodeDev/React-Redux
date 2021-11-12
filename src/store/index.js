// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counter';
import userAuthSlice from './auth';

// const counterReducer = (state = initialstate, action) => {
//   console.log(action);
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   } else if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   } else if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterSlice.reducer);

// const store = configureStore({
//   reducer: {
//     counter : counterSlice.reducer,
//   },
// });

const store = configureStore({
  reducer: { counter: counterSlice, auth: userAuthSlice },
});

export default store;
