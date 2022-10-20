import axios from 'axios';

axios.defaults.baseURL = 'https://wallet.goit.ua/api/';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = async credentials => {
  const r = await axios.post('auth/sign-up', credentials);
  setAuthHeader(r.data.token);
  return r.data;
};

export const logIn = async credentials => {
  const r = await axios.post('auth/sign-in', credentials);
  setAuthHeader(r.data.token);
  return r.data;
};

export const logOut = async token => {
  axios.defaults.headers.common.Authorization = token;
  await axios.delete('auth/sign-out');
  axios.defaults.headers.common.Authorization = '';
};

export const refresh = async token => {
  axios.defaults.headers.common.Authorization = token;
  const r = await axios.get('users/current');
  return r.data;
};
