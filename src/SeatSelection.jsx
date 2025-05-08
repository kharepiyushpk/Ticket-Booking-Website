import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


export default function SeatSelection() {
  const totalSeats = 30;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seatNumber) => {
    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((s) => s !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const navigate = useNavigate();

const goToPayment = () => {
  if (selectedSeats.length === 0) {
    alert('Please select at least one seat before continuing to payment.');
    return;
  }
  navigate('/payment');
};

  const handleConfirm = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }
    alert(`Seats confirmed: ${selectedSeats.join(', ')}`);
    // Navigate or send to backend here
  };

  return (
    <div className="min-h-screen bg-blue-50 px-4 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Select Your Seats</h1>

      <div className="grid grid-cols-6 gap-4 mb-8">
        {Array.from({ length: totalSeats }, (_, i) => i + 1).map((seatNumber) => {
          const isSelected = selectedSeats.includes(seatNumber);
          return (
            <motion.button
              key={seatNumber}
              onClick={() => toggleSeat(seatNumber)}
              className={`w-12 h-12 rounded shadow-md text-sm font-semibold ${
                isSelected
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 hover:bg-blue-100'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {seatNumber}
            </motion.button>
          );
        })}
      </div>

      <motion.button
        onClick={handleConfirm}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-semibold shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Confirm Seats
      </motion.button>
      <motion.button
  onClick={goToPayment}
  className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 font-semibold shadow-lg"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Continue to Payment
</motion.button>

    </div>
  );
}

