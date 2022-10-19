import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logInUser,
  logOutUser,
  refreshUser,
} from './operationsAuth';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { id: null, username: null, email: null, balance: null },
    token: null,
    isAuth: false,
    error: null,
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    [registerUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
    /////////////
    [logInUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    [logInUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
    /////////////
    [logOutUser.fulfilled]: state => {
      state.user = { id: null, username: null, email: null, balance: null };
      state.token = null;
      state.isAuth = false;
    },
    [logOutUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
    ////////////
    [refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    [refreshUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
