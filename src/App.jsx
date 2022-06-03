import React, { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HomePage from './pages/HomePage';
import Table from './pages/Table';
import { dark, light } from './styles/theme';
import CarShowContext from './context/CarShowContext';

function App() {
  const { theme } = useContext(CarShowContext);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
