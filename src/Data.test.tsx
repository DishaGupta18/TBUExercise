import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders Car Hire – Search, Compare & Save text', () => {
  render(<App />);
  const textElement = screen.getByText(/Car Hire – Search, Compare & Save/i);
  expect(textElement).toBeInTheDocument();
});

test('renders search text box', () => {
  render(<App />);
  const textbox = screen.getByRole('textbox', {
    name: /pick-up location/i
  })
  expect(textbox).toBeInTheDocument();
});
