import { useNavigate } from 'react-router-dom';

const BookingConfirmed = () => {
  const navigate = useNavigate();
  return (
    <div className="booking-confirmed">
     <p>Booking Confirmed </p>   
      <button className="primaryBtn goback"onClick={() => navigate('/')}>Back</button>

      </div>
  )
}

export default BookingConfirmed