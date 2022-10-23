import axios from 'axios';

export const transactionCategories = async token => {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  try {
    const { data } = await axios.get('transaction-categories');
    return data;
  } catch (error) {
    throw error;
  }
};

export const addTransaction = async data => {
  try {
    const r = await axios.post('transactions', data);
    return r.data;
  } catch (error) {
    return error;
  }
};

export const getAllTransactions = async () => {
  try {
    const r = await axios.get('transactions');
    return r.data;
  } catch (error) {
    return error;
  }
};

export const getAllTransactionsForPeriod = async (month, year) => {
  try {
    const r = await axios.get(
      `transactions-summary?month=${month}&year=${year}`
    );
    return r;
  } catch (error) {
    throw error;
  }
};

export const removeTransaction = async id => {
  try {
    await axios.delete(`transactions/${id}`);
  } catch (error) {
    throw error;
  }
};

export const editTransaction = async (id,data) => {
  try {
    const r = await axios.patch(`transactions/${id}`,data);
    return r
  } catch (error) {
    throw error;
  }
};
