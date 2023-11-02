// Book.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Book from '../src/components/Book';

test('renders the Book component', () => {
  render(<Book />);
  const bookTitle = screen.getByText('Reserve a Table at Little Lemon Restaurant');
  expect(bookTitle).toBeInTheDocument();
});

test('displays a success message after form submission', async () => {
  render(<Book />);
  const fullNameInput = screen.getByPlaceholderText('Full Name');
  const emailInput = screen.getByPlaceholderText('Email');
  const phoneInput = screen.getByPlaceholderText('Phone Number');
  const dateInput = screen.getByPlaceholderText('Date');
  const timeInput = screen.getByPlaceholderText('Time');
  const guestsInput = screen.getByPlaceholderText('Number of Guests');
  const submitButton = screen.getByText('Reserve Table');

  fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
  fireEvent.change(dateInput, { target: { value: '2023-12-31' } });
  fireEvent.change(timeInput, { target: { value: '19:00' } });
  fireEvent.change(guestsInput, { target: { value: '4' } });

  fireEvent.click(submitButton);

  const successMessage = await screen.findByText(
    'Your reservation has been booked. We look forward to serving you!'
  );

  expect(successMessage).toBeInTheDocument();
});
