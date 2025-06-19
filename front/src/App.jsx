import React from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import PricingSection from "./components/subscription";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          
          <Route path={"/"} element={<PricingSection />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;