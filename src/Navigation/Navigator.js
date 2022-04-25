import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Param from "../Pages/Param";
import Services from "../Pages/Services";

const Navigator = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* <Route exact path="/about" element={<About />} /> */}
        <Route path="/about/:id" element={<Param />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
