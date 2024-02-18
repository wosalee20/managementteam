// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: localStorage.getItem("username") || "",
  isNavbarVisible: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
      // Update local storage
      localStorage.setItem("username", action.payload);
    },
    toggleNavbar(state) {
      state.isNavbarVisible = !state.isNavbarVisible;
    },
    logout(state) {
      state.username = "";
      // Clear username from local storage
      localStorage.removeItem("username");
    },
  },
});

export const { updateName, toggleNavbar, logout } = userSlice.actions;

export default userSlice.reducer;
