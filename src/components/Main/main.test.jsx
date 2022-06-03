import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderWithRouter from '../../helpers/renderWithRouter';
import Main from './index';

describe('Testing component Main', () => {
  it('should be able to show a h1 element.', () => {
    renderWithRouter(<Main />);

    const h1Element = screen.getAllByRole('heading', {
      level: 1,
    });
    expect(h1Element[0]).toBeInTheDocument();
    expect(h1Element[1]).toBeInTheDocument();
    expect(h1Element).toHaveLength(2);
  });
  it('should be able to show a button text "Ver carros".', () => {
    renderWithRouter(<Main />);

    const buttonShowCars = screen.getByRole('button', {
      name: 'Ver carros',
    });
    expect(buttonShowCars).toBeInTheDocument();
  });
});
