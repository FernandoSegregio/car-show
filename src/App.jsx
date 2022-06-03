import React, { useContext } from 'react';
import {
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
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
