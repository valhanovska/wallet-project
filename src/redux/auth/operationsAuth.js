import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refresh,
  setAuthHeader,
} from '../../servises/usersApi';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const data = await register(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const data = await logIn(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/signOut',
  async (credentials, thunkAPI) => {
    try {
      const data = await logOut(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const savedToken = state.auth.token;
    if (!savedToken) return thunkAPI.rejectWithValue('token not found');
    try {
      setAuthHeader(savedToken);
      const data = await refresh(savedToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
