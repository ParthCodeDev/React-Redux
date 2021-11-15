import { createSlice } from "@reduxjs/toolkit";
import { uiAction } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItems = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItems) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItems.quantity++;
        existingItems.totalPrice = newItem.price + existingItems.totalPrice;
      }
      console.log("addItemToCart-->", state);
    },
    removeItemToCart(state, action) {
      console.log("removeItemToCart-->", action);
      console.log("removeItemToCart items -->", state.items);
      const id = action.payload;
      console.log("removeItemToCart id-->", id);
      const existingItems = state.items.find((item) => item.id === id);
      console.log("existingItems-->", existingItems);
      state.totalQuantity--;
      state.changed = true;
      if (existingItems.quantity === 1) {
        state.items = state.items.filter((items) => items.id !== id);
      } else {
        existingItems.quantity--;
        existingItems.totalPrice =
          existingItems.totalPrice - existingItems.price;
      }
    },
  },
});


export const cartSliceAction = cartSlice.actions;
export default cartSlice.reducer;
