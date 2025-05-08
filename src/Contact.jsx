import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bgImage from './assets/back.avif';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl max-w-xl w-full p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Contact Us</h1>
        {submitted ? (
          <motion.div
            className="text-green-600 text-center text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thank you! We'll get back to you soon.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        )}
      </div>
    </motion.div>
  );
}

