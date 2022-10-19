
import axios from 'axios';

/////////////////////////////////////////
const setContactsBaseURL = () => {
  axios.defaults.baseURL = 'https://wallet.goit.ua/api/';
};

const tokenState = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI3NmU5OTE5ZC1kZjJmLTQ0YTQtOWNhOS1mOWEyMTA0ODFjNjMiLCJpYXQiOjE2NjYxODUyODUsImV4cCI6MTAwMDAwMDE2NjYxODUyODR9.ZC04FZWUkkEcjgw4zWtnZM4iojfNf27MdCJJe-2luKc"
///////////////////////////////////////////

export const transactionCategories = async () => {
  setContactsBaseURL();
  axios.defaults.headers.common = {'Authorization': `Bearer ${tokenState}`}
  try {
    const { data } = await axios.get('transaction-categories');
    return data;
  } catch (error) {
    throw error;
  }
};