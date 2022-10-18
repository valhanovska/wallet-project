import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (dataUser, thunkAPI) => {
    try {
      const r = await axios.post('/auth/sign-up', dataUser);
      setAuthHeader(r.data.token);
      return r.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (dataUser, thunkAPI) => {
    try {
      const r = await axios.post('/auth/sign-in', dataUser);
      setAuthHeader(r.data.token);
      return r.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/sign-out', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/sign-out');
    const savedToken = '';
    axios.defaults.headers.common = {
      Authorization: `Bearer ${savedToken}`,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
