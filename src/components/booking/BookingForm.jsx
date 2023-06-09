import  { useReducer, useEffect,useState} from 'react';
import { fetchAPI, submitAPI } from '../../api';
import { useNavigate } from 'react-router-dom';
 import { validateForm } from '../../utils/validateForm';


const initialState = {
  name: '',
  telephone: '',
  date: new Date(),
  time: '',
  guests: 0,
  occasion: '',
  availableTimeSlots: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_TELEPHONE':
      return { ...state, telephone: action.payload };
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
  const [errors, setErrors] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, telephone,date, time, guests, occasion, availableTimeSlots } = state;

  useEffect(() => {
    const updatedTimeSlots = fetchAPI(date);
    dispatch({ type: 'SET_AVAILABLE_TIME_SLOTS', payload: updatedTimeSlots });
  }, [date]);

  const handleNameChange = (e) => {
    dispatch({ type: 'SET_NAME', payload: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, name: validateForm('name', e.target.value) }));

  };

  const handleTelephoneChange = (e) => {
    dispatch({ type: 'SET_TELEPHONE', payload: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, telephone: validateForm('telephone', e.target.value) }));

  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    dispatch({ type: 'SET_DATE', payload: selectedDate });
    setErrors((prevErrors) => ({ ...prevErrors, date: validateForm('date', selectedDate) }));

  };

  const handleTimeChange = (e) => {
    dispatch({ type: 'SET_TIME', payload: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, time: validateForm('time', e.target.value) }));

  };

  const handleGuestsChange = (e) => {
    dispatch({ type: 'SET_GUESTS', payload: parseInt(e.target.value) });
    setErrors((prevErrors) => ({ ...prevErrors, guests: validateForm('guests',  parseInt(e.target.value)) }));

  };

  const handleOccasionChange = (e) => {
    dispatch({ type: 'SET_OCCASION', payload: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, occasion: validateForm('occasion', e.target.value ) }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(state);

   
     if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission
      const formData = {
        name,
        telephone,
        date,
        time,
        guests,
        occasion
      };
    const success = submitAPI(formData);
    if (success) {
      dispatch({ type: 'RESET_FORM' });
      navigate('/bookingconfirmed');
    } }else {
     //form not valid
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
           <label>
        Name:
        <input  className='field' type="text" value={name} onChange={handleNameChange} required />
        {errors.name && <p className="error">{errors.name}</p>}

      </label>
      <br />

      <label>
        Telephone:
        <input className='field' type="tel" value={telephone} onChange={handleTelephoneChange} required />
        {errors.telephone && <p className="error">{errors.telephone}</p>}

      </label>
      <br /> 
 
      <label>
        Date:
        <input type="date" className='field' value={date.toISOString().split('T')[0]} onChange={handleDateChange} required />
        {errors.date && <p className="error">{errors.date}</p>}

      </label>
      <br />

      <label>
        Time:
        <select  className='field' value={time} onChange={handleTimeChange} required>
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
        <input className='field'type="number" min={1} max={200} value={guests} onChange={handleGuestsChange} required />
      </label>
      <br />
      <label>
        Occasion:
        <select className='field' value={occasion} onChange={handleOccasionChange} required>
          <option value="">Select an occasion</option>
          <option value="anniversary">Anniversary</option>
          <option value="birthday">Birthday</option>
          <option value="meeting">Meeting</option>
        </select>
      </label>
      <br />
      <button  className='field primaryBtn' type="submit">Submit</button>  
      <button  className='field primaryBtn' onClick={() => navigate('/')}>Cancel</button> 
      
    </form>
  );
};

export default BookingForm
