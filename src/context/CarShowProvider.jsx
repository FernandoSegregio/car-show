import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import CarShowContext from './CarShowContext';

function CarShowProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const context = useMemo(() => ({
    theme, setTheme,
  }), [theme]);

  return (
    <CarShowContext.Provider value={context}>
      {children}
    </CarShowContext.Provider>
  );
}
CarShowProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CarShowProvider;
