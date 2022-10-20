import axios from 'axios';

export const transactionCategories = async token => {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  try {
    const { data } = await axios.get('transaction-categories');
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
