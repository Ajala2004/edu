import React from "react";
import About from "./components/about";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Catalog from "./components/catalog";

import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lookbook from "./components/lookbook"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route path={"/"} element={<Hero />} />
          <Route path={"/catalog"} element={<Catalog />} />
          
          <Route path={"/lookbook"} element={<Lookbook />} />
          <Route path={"/about"} element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;