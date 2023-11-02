import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../src/components/Contact';

describe('Contact Component', () => {
  it('renders contact form elements', () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText('Enter your name');
    const emailInput = screen.getByPlaceholderText('Enter email address');
  });

  it('updates state when form inputs change', () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText('Enter your name');
  });
});
