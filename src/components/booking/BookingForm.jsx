import  { useState ,useEffect } from 'react';
import { fetchAPI, submitAPI } from "../../api"
const BookingForm = () => {
  const [availableSlots, setAvailableSlots] = useState([]);


  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const slots = await fetchAPI(date);
      setAvailableSlots(slots);
    };

    fetchData();
  }, [date]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit reservation logic goes here
const formData = {
      date,
      time, // Assuming the time input has the name "time"
    };

    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      // Handle successful submission
      console.log('Form submitted successfully');
    } else {
      // Handle submission error
      console.log('Form submission failed');
    }
    // Reset form fields
    setDate('');
    setTime('');
    setGuests('');
    setOccasion('');
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
         type="date"
         value={new Date(date).toISOString().split('T')[0]}
         onChange={(e) => setDate(new Date(e.target.value))}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <select name="time"   onChange={(e) =>setTime(e.target.value)} value={time}>
          {availableSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          id="guests"
          placeholder="1" min="1" max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </div>

      <button type="submit">Submit reservation</button>
    </form>
  );
};

export default BookingForm;
