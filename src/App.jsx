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
          {/* <div className="bg-cover bg-no-repeat bg-center bg-gray-100"> */}

          {/* </div> */}

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isUploadOpen={isUploadOpen}
                  setIsUploadOpen={setIsUploadOpen}
                />
              }
            />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/contact"
              element={<Contact setIsUploadOpen={setIsUploadOpen} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
