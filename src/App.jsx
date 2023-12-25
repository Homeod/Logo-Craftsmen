import React, { useState } from "react";
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
  Error,
} from "./components";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Upload from "./components/Upload";

const App = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  return (
    <div>
      {isUploadOpen && (
        <Upload isUploadOpen={isUploadOpen} setIsUploadOpen={setIsUploadOpen} />
      )}
      <BrowserRouter>
        <div className="relative z-0 ">
          <Navbar
            setIsUploadOpen={setIsUploadOpen}
            isUploadOpen={isUploadOpen}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Landing
                  isUploadOpen={isUploadOpen}
                  setIsUploadOpen={setIsUploadOpen}
                />
              }
            />
            <Route path="/faqs" element={<FAQs />} />
            <Route
              path="/about"
              element={<About setIsUploadOpen={setIsUploadOpen} />}
            />
            <Route
              path="/contact"
              element={<Contact setIsUploadOpen={setIsUploadOpen} />}
            />
            <Route path="/vector" element={<Vector />} />
            <Route path="/embroidery" element={<Embroidery />} />
            <Route path="/imageedit" element={<ImageEdit />} />
            <Route path="/artvisuals" element={<ArtVisuals />} />
            <Route path="/orderentry" element={<OrderEntry />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
