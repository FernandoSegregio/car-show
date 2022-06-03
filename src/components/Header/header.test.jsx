import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderWithRouter from '../../helpers/renderWithRouter';
import Header from '.';

describe('Testing component Header', () => {
  it('should be able to show a Nav element.', () => {
    renderWithRouter(<Header />);

    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });
});
