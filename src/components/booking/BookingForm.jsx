import React, { useReducer, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../../api';
import { useNavigate } from 'react-router-dom';

const initialState = {
  date: new Date(),
  time: '',
  guests: 0,
  occasion: '',
  availableTimeSlots: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATE':
      return { ...state, date: action.payload };
    case 'SET_TIME':
      return { ...state, time: action.payload };
    case 'SET_GUESTS':
      return { ...state, guests: action.payload };
    case 'SET_OCCASION':
      return { ...state, occasion: action.payload };
    case 'SET_AVAILABLE_TIME_SLOTS':
      return { ...state, availableTimeSlots: action.payload };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const BookingForm = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);
  const { date, time, guests, occasion, availableTimeSlots } = state;

  useEffect(() => {
    const updatedTimeSlots = fetchAPI(date);
    dispatch({ type: 'SET_AVAILABLE_TIME_SLOTS', payload: updatedTimeSlots });
  }, [date]);

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    dispatch({ type: 'SET_DATE', payload: selectedDate });
  };

  const handleTimeChange = (e) => {
    dispatch({ type: 'SET_TIME', payload: e.target.value });
  };

  const handleGuestsChange = (e) => {
    dispatch({ type: 'SET_GUESTS', payload: parseInt(e.target.value) });
  };

  const handleOccasionChange = (e) => {
    dispatch({ type: 'SET_OCCASION', payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion
    };
    const success = submitAPI(formData);
    if (success) {
      dispatch({ type: 'RESET_FORM' });
      navigate('/bookingconfirmed');
    } else {
      alert('Booking submission failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" value={date.toISOString().split('T')[0]} onChange={handleDateChange} required />
      </label>
      <br />
      <label>
        Time:
        <select value={time} onChange={handleTimeChange} required>
          <option value="">Select a time</option>
          {availableTimeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Number of Guests:
        <input type="number" value={guests} onChange={handleGuestsChange} required />
      </label>
      <br />
      <label>
        Occasion:
        <select value={occasion} onChange={handleOccasionChange} required>
          <option value="">Select an occasion</option>
          <option value="anniversary">Anniversary</option>
          <option value="birthday">Birthday</option>
          <option value="meeting">Meeting</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm
