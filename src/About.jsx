import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold text-blue-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Yadav Travels  Bus Booking
      </motion.h1>

      <motion.div
        className="max-w-5xl flex flex-col md:flex-row gap-10 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80"
          alt="Bus Service"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />

        <div className="text-gray-700 space-y-4 text-lg">
          <p>
            Yadav Travels is your trusted platform for hassle-free bus ticket booking. Whether you're commuting
            daily or planning a long-distance journey, we ensure convenience, safety, and reliability every step
            of the way.
          </p>
          <p>
            With real-time seat availability, secure payments, and an intuitive interface, booking a bus has never
            been easier. We're committed to delivering the best travel experience with comfort and transparency.
          </p>
          <p>
            Thank you for choosing Yadav Travels. We look forward to being part of your journey!
          </p>
        </div>
      </motion.div>
    </div>
  );
}

