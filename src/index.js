import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './index.styled';
import { App } from 'components/App';
import { CurrencyExchange } from 'components/CurrencyExchange';
import { ThemeWrapper } from 'components/ThemeWrapper/ThemeWrapper';
import { Provider } from 'react-redux';
import { store } from './redux/store';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeWrapper>
      <BrowserRouter>
        <GlobalStyle />
        <App />
        <CurrencyExchange/>
      </BrowserRouter>
    </ThemeWrapper>
    </Provider>
  </React.StrictMode>
);
