import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
 import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import BookingForm from './components/booking/BookingForm';
import ConfirmedBooking from './pages/BookingConfirmed';

const MockApp = () => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<BookingForm />} />
        <Route path="/bookingconfirmed" element={<ConfirmedBooking />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('BookingForm', () => {
  test('renders form fields', () => {
    render(<MockApp />);
    
    // Assert that all form fields are rendered
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/telephone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test('displays error message for invalid name', () => {
    render(<MockApp />);
    
    // Find the name input field and enter a number
    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: 'John123' } });

    // Assert that the error message is displayed
    expect(screen.getByText(/Name cannot contain numbers or special characters./i)).toBeInTheDocument();
  });

  test('displays error message for invalid phone number', () => {
    render(<MockApp />);
    
    // Find the phone number input field and enter letters
    const phoneInput = screen.getByLabelText(/telephone/i);
    fireEvent.change(phoneInput, { target: { value: '123-abc' } });

    // Assert that the error message is displayed
    expect(screen.getByText(/Telephone must be a 10-digit number./i)).toBeInTheDocument();
  });

  test('navigates to confirmed booking page for valid form submission', () => {
    render(<MockApp />);
    
    // Find and fill the form fields with valid data
    const nameInput = screen.getByLabelText(/name/i);
    const phoneInput = screen.getByLabelText(/telephone/i);
    const dateInput = screen.getByLabelText(/date/i);
    const timeInput = screen.getByLabelText(/time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionInput = screen.getByLabelText(/occasion/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(dateInput, { target: { value: '2023-07-02' } });
    fireEvent.change(timeInput, { target: { value: '12:00 PM' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionInput, { target: { value: 'Birthday' } });

    // Find and click the submit button
    const submitButton = screen.getByText(/submit/i);
    fireEvent.click(submitButton);

    // Assert that the user is navigated to the confirmed booking page
    expect(screen.getByText(/booking confirmed/i)).toBeInTheDocument();
  });
});
