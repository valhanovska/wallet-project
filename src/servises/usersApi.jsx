import axios from 'axios';

axios.defaults.baseURL = 'https://wallet.goit.ua/api/';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = async credentials => {
  const r = await axios.post('/auth/sign-up', credentials);
  setAuthHeader(r.data.token);
  return r.data;
};

export const logIn = async credentials => {
  const r = await axios.post('/auth/sign-in', credentials);
  setAuthHeader(r.data.token);
  return r.data;
};

export const logOut = async () => {
  const r = await axios.delete('/auth/sign-out');
  const savedToken = '';
  axios.defaults.headers.common = {
    Authorization: `Bearer ${savedToken}`,
  };
  return r.data;
};

export const refresh = async () => {
  const r = await axios.get('/users/current');
  return r.data;
};
