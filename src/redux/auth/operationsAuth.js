import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua/api/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const r = await axios.post('/auth/sign-up', credentials);
      setAuthHeader(r.data.token);
      return r.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const r = await axios.post('/auth/sign-in', credentials);
      setAuthHeader(r.data.token);
      return r.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/sign-out', async (_, thunkAPI) => {
  try {
    await axios.delete('/auth/sign-out');
    const savedToken = '';
    axios.defaults.headers.common = {
      Authorization: `Bearer ${savedToken}`,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const savedToken = state.auth.token;
    if (!savedToken) return thunkAPI.rejectWithValue('token not found');
    try {
      setAuthHeader(savedToken);
      const r = await axios.get('/users/current');
      return r.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
