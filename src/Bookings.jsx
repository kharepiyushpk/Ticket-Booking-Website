import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import bgImage from './assets/back.avif';

const Booking = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");

  const cities = [
    "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai",
    "Kolkata", "Pune", "Jaipur", "Ahmedabad", "Lucknow"
  ];

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/seats'); // 👈 Go to seat selection
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center px-4 py-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-black-600">Book Your Ticket</h2>

        {/* From City */}
        <div className="mb-4">
          <label htmlFor="from" className="block text-gray-700 font-medium mb-2">
            From
          </label>
          <select
            id="from"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>Select city</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* To City */}
        <div className="mb-6">
          <label htmlFor="to" className="block text-gray-700 font-medium mb-2">
            To
          </label>
          <select
            id="to"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>Select city</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
        <label htmlFor="to" className="block text-gray-700 font-medium mb-2">
            Date
          </label>
        <input type="date" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-pink-700 transition"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;
