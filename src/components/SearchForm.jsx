import React, { useState } from 'react';

const SearchForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
  });

  const cities = [
    'Delhi',
    'Mumbai',
    'Bangalore',
    'Chennai',
    'Hyderabad',
    'Pune',
    'Kolkata',
    'Ahmedabad',
    'Jaipur',
    'Goa',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (formData.from === formData.to) {
      alert('Source and destination cities must be different.');
      return;
    }

    alert(`Searching buses from ${formData.from} to ${formData.to} on ${formData.date}`);
    // Add navigation or backend call here
  };

  return (
    <section className="bg-white py-10 px-4 shadow-md -mt-10 z-10 relative max-w-4xl mx-auto rounded-xl">
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <select
          name="from"
          value={formData.from}
          onChange={handleChange}
          required
          className="border p-3 rounded"
        >
          <option value="">From</option>
          {cities.map((city) => (
            <option key={`from-${city}`} value={city}>
              {city}
            </option>
          ))}
        </select>

        <select
          name="to"
          value={formData.to}
          onChange={handleChange}
          required
          className="border p-3 rounded"
        >
          <option value="">To</option>
          {cities.map((city) => (
            <option key={`to-${city}`} value={city}>
              {city}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-blue-700 text-white rounded p-3 hover:bg-blue-800 transition"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;

