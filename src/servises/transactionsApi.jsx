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
  try {
    const r = await axios.post('transactions', data);
    console.log('data', data);
    return r.data;
  } catch (error) {
    throw error;
  }
};

export const getAllTransactions = async () => {
  try {
    const r = await axios.get('transactions');
    return r.data;
  } catch (error) {
    throw error;
  }
};
