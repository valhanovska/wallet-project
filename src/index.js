import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './index.styled';

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle/>
          <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
