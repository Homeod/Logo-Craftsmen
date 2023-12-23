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
  Vector,
  Embroidery,
  ImageEdit,
  ArtVisuals,
  OrderEntry,
} from "./components";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 ">
        <div className="bg-cover bg-no-repeat bg-red-100">
          {/* <Navbar /> */}
        </div>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vector" element={<Vector />} />
          <Route path="/embroidery" element={<Embroidery />} />
          <Route path="/imageedit" element={<ImageEdit />} />
          <Route path="/artvisuals" element={<ArtVisuals />} />
          <Route path="/orderentry" element={<OrderEntry />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
