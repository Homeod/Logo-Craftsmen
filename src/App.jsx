import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  FAQs,
  Navbar,
  Portfolio,
  Hero,
  Works,
  Landing,
} from "./components";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 ">
        <div className="bg-cover bg-no-repeat bg-violet-100"> 
          <Navbar/>
        </div>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
