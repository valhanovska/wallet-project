import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './index.styled';
import { App } from 'components/App';
import { CurrencyExchange } from 'components/CurrencyExchange';
import { ThemeWrapper } from 'components/ThemeWrapper/ThemeWrapper';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeWrapper>
      <BrowserRouter>
        <GlobalStyle />
        <App />
        <CurrencyExchange/>
      </BrowserRouter>
    </ThemeWrapper>
  </React.StrictMode>
);
