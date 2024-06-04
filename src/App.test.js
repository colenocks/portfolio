import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './components/Home';
import { MemoryRouter } from 'react-router-dom';

test('renders home page', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const text = screen.getByText(/home/i);
  expect(text).toBeInTheDocument();
});
