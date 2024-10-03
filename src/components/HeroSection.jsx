import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import BookingPopup from './BookingPopup';
import background from '../assets/Images/background.jpg'
import Image2 from '../assets/Images/image2.jpg'

export default function HeroSection({ onExploreRooms }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [persons, setPersons] = useState(2);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleBookNow = () => {
    if (checkIn && checkOut) {
      setIsPopupOpen(true);
    } else {
      alert('Please select check-in and check-out dates before booking.');
    }
  };

  const handleBookingConfirmed = () => {
    setIsPopupOpen(false);
    setCheckIn('');
    setCheckOut('');
    setPersons(2);
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: `url(${background})`}}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
          In A Great Hotel, You Don't Just Stay, You Belong
        </h1>
        <p className="text-xl mb-8 text-center max-w-2xl">
          Find your perfect stay with ease explore a wide range of rooms, grab great deals, and book your ideal getaway today
        </p>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <DateSelector label="Check in" date={checkIn} setDate={setCheckIn} />
          <DateSelector label="Check out" date={checkOut} setDate={setCheckOut} />
          <PersonSelector persons={persons} setPersons={setPersons} />
          <button 
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition duration-300"
            onClick={handleBookNow}
          >
            Book Now
          </button>
        </div>
      </div>
      <BookingPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onConfirm={handleBookingConfirmed}
        checkIn={checkIn}
        checkOut={checkOut}
        persons={persons}
      />
    </div>
  );
}

function DateSelector({ label, date, setDate }) {
  return (
    <div className="flex flex-col">
      <span className="text-gray-500 text-sm">{label}</span>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="text-gray-800 border rounded p-1"
      />
    </div>
  );
}

function PersonSelector({ persons, setPersons }) {
  return (
    <div className="flex flex-col relative">
      <span className="text-gray-500 text-sm">Person</span>
      <select
        value={persons}
        onChange={(e) => setPersons(Number(e.target.value))}
        className="text-gray-800 border rounded p-1 pr-8 appearance-none"
      >
        {[1, 2, 3, 4, 5].map(num => (
          <option key={num} value={num}>{num} person{num !== 1 ? 's' : ''}</option>
        ))}
      </select>
      <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2 bottom-2 pointer-events-none" />
    </div>
  );
}