import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      if (state) {
        return Object.assign({}, state, action.payload);
      }
    },
    logOut: () => initialState,
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice;

export const selectAuth = (state: RootState) => state.auth;
