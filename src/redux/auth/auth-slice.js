import { createSlice } from "@reduxjs/toolkit";

import { signup, login } from "./auth-operations";

const initialState = {
  user: {},
  accessToken: "",
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    // ---Sign up
    [signup.pending]: (store, _) => ({ ...store, loading: true, error: null }),
    [signup.fulfilled]: (store, { payload }) => ({
      ...store,
      isLogin: true,
      loading: false,
      ...payload,
    }),
    [signup.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    //----------
    // ---Login
    [login.pending]: (store, _) => ({ ...store, loading: true, error: null }),
    [login.fulfilled]: (store, { payload }) => ({
      ...store,
      isLogin: true,
      loading: false,
      ...payload,
    }),
    [login.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    //----------
  },
});

export default authSlice.reducer;
