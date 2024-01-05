import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type AuthState = {
  code: number;
  message: string;
  success: boolean;
  data: object;
};

type State = AuthState | object;

const initialState: State = {};

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
