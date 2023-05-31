import './App.css';
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Header from "./components/Header"
 import Footer from "./components/Footer"

import Home from './pages/Home';
import Booking from './pages/Booking';
import BookingConfirmed from './pages/BookingConfirmed';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/bookingconfirmed" element={<BookingConfirmed/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;
