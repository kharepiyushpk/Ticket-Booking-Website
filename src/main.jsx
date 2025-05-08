import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./About";
import Contact from "./Contact";
import Bus from "./Bus";
import Navbar from "./Navbar";
import Bookings from './Bookings';
import SeatSelection from './SeatSelection';
import Payment from './Payment';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buses" element={<Bus />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/seats" element={<SeatSelection />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
