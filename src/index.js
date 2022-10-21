import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './index.styled';
import { App } from 'components/App';
import { ThemeWrapper } from './components/ThemeWrapper/ThemeWrapper';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <ThemeWrapper>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ThemeWrapper>
      </PersistGate>

    </Provider>
  </React.StrictMode>
);
