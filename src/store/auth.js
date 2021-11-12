import { createSlice } from "@reduxjs/toolkit";

const userInitialAuth = { isAuthenticated: false };

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: userInitialAuth,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authAction = userAuthSlice.actions;

export default userAuthSlice.reducer;
