import React from 'react';
import Navbar from './Navbar';
import HeroSection from './components/HeroSection';
import SearchForm from './components/SearchForm';
import FeaturedRoutes from './components/FeaturedRoutes';
import SeatSelection from './SeatSelection';
import PaymentForm from './Payment';
import Footer from './components/Footer';
import Bookings from "./Bookings";

const App = () => {
  return (
    <div className="font-sans">
      {/* <Navbar /> */}
      <HeroSection />
      <SearchForm />
      <FeaturedRoutes />
      
      <Footer />
    </div>
  );
};

export default App;

