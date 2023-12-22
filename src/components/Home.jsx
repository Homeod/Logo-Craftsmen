import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FAQs from "./FAQs";
import Footer from "./Footer";
import Upload from "./Upload";

const Home = ({ isUploadOpen, setIsUploadOpen }) => {
  return (
    <div>
      <div className="Home">
        <Navbar setIsUploadOpen={setIsUploadOpen} />
        <Hero />
      </div>
      <FAQs />
      {/* Testimonials */}
      <Footer />
    </div>
  );
};

export default Home;
