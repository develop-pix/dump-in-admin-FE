import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice;

export const selectUser = (state: RootState["auth"]) => state.user;
export const selectToken = (state: RootState["auth"]) => state.token;
