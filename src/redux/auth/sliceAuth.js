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
    user: { id: null, username: null, email: null },
    token: null,
    isAuth: false,
    error: null,
    balance: null,
    isLoading: false,
    isRefreshing: false,
  },
  reducers: {
    isValidTokin: (state, action) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: {
    [registerUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    [registerUser.rejected]: (state, action) => {
      state.isAuth = false;
      state.error = action.payload;
    },
    /////////////
    [logInUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logInUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    [logInUser.rejected]: (state, action) => {
      state.isAuth = false;
      state.error = action.payload;
    },
    /////////////
    [logOutUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logOutUser.fulfilled]: state => {
      state.isLoading = false;
      state.user = { id: null, username: null, email: null };
      state.token = '';
      state.isAuth = false;
    },
    [logOutUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
    ////////////
    [refreshUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
    },
    [refreshUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
    ////////////////////
  },
});

export const { isValidTokin } = authSlice.actions;

export const authReducer = authSlice.reducer;
