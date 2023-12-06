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

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 ">
          <div className="bg-cover bg-no-repeat bg-center bg-gray-100">
            <Navbar />
          </div>
        

        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
