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

export const addTransaction = async data => {
  const r = await axios.post('transactions', data);
  return r.data;
};

export const getAllTransactions = async () => {
  const r = await axios.get('transactions');
  return r.data;
};
