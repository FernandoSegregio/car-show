import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CarShowProvider from './context/CarShowProvider';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarShowProvider>
        <GlobalStyle />
        <App />
      </CarShowProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
