import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './operationsAuth';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isAuth: false,
    error: null,
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    [register.rejected]: (state, action) => {
      state.error = action.payload;
    },
    /////////////
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    [logIn.rejected]: (state, action) => {
      state.error = action.payload;
    },
    /////////////
    [logOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isAuth = false;
    },
    [logOut.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
