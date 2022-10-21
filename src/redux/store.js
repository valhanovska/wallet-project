import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { themesOptions } from 'components/ThemeWrapper/ThemeWrapper';

import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/sliceAuth';
import { transactionCategoriesReducer } from './transactionCategories/sliceTransaction';
import { transactionsControllersReducer } from './transactionsController/trControllerSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  test: (state = 9) => state,
  test2: (state = 6) => state,
  theme: (state = themesOptions.LIGHT) => state,
  transactionCategories: transactionCategoriesReducer,
  transactionsControllers: transactionsControllersReducer,
  // transactions: transactionsReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
