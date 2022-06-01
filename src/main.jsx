import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CarShowProvider from './context/CarShowProvider';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarShowProvider>
      <GlobalStyle />
      <App />
    </CarShowProvider>
  </React.StrictMode>,
);
