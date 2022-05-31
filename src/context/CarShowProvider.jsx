import React from 'react';
import PropTypes from 'prop-types';
import CarShowContext from './CarShowContext';

function PokedexProvider({ children }) {
  const context = { };

  return (
    <CarShowContext.Provider value={context}>
      {children}
    </CarShowContext.Provider>
  );
}
PokedexProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PokedexProvider;
