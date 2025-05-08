import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Bookings', path: '/bookings' },
  { name: 'Buses', path: '/buses' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          YADAV TRAVELS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navItems.map(({ name, path }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={path}
                className={`text-gray-700 hover:text-blue-600 font-medium ${
                  location.pathname === path ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden px-4 pb-4 space-y-2 bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`block text-gray-700 hover:text-blue-600 font-medium ${
                location.pathname === path ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              {name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
