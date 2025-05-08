import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Payment() {
  const [paymentData, setPaymentData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment Successful! Thank you for booking.');
    // Logic to actually process payment would go here
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <motion.div
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Secure Payment
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Cardholder Name</label>
            <input
              type="text"
              name="name"
              required
              value={paymentData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-200 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              required
              maxLength={16}
              value={paymentData.cardNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-200 outline-none"
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700">Expiry</label>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                required
                value={paymentData.expiry}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-200 outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">CVV</label>
              <input
                type="password"
                name="cvv"
                required
                maxLength={4}
                value={paymentData.cvv}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-200 outline-none"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 font-semibold shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Pay Now
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
