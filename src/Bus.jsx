import React from 'react';
import { motion } from 'framer-motion';
import busImage1 from './assets/bus1.jpg'; // Add your image to src/assets
import busImage2 from './assets/bus2.jpg';
import busImage3 from './assets/bus3.jpg';

export default function Bus() {
  const buses = [
    {
      id: 1,
      name: 'Luxury AC Sleeper',
      image: busImage2,
      description: 'Air-conditioned sleeper coach with personal entertainment system and charging ports.',
    },
    {
      id: 2,
      name: 'Volvo Semi Sleeper',
      image: busImage3,
      description: 'Comfortable seating with legroom, ideal for long distances.',
    },
    {
      id: 3,
      name: 'Volvo Semi Sleeper',
      image: busImage3,
      description: 'Comfortable seating with legroom, ideal for long distances.',
    },
    {
      id: 4,
      name: 'Volvo Semi Sleeper',
      image: busImage3,
      description: 'Comfortable seating with legroom, ideal for long distances.',
    },
    {
      id: 5,
      name: 'Volvo Semi Sleeper',
      image: busImage3,
      description: 'Comfortable seating with legroom, ideal for long distances.',
    },
    {
      id: 6,
      name: 'Mini Bus - City Tour',
      image: busImage1,
      description: 'Best suited for small group travels within the city.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">Our Buses</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {buses.map((bus) => (
          <motion.div
            key={bus.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <img src={bus.image} alt={bus.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-600">{bus.name}</h2>
              <p className="text-gray-600 mt-2">{bus.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
