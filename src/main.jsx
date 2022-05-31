import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CarShowProvider from './context/CarShowProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarShowProvider>
      <App />
    </CarShowProvider>
  </React.StrictMode>,
);
