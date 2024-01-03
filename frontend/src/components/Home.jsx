import React, { useState } from "react";
import Hero from "./Hero";


const Home = ({ isUploadOpen, setIsUploadOpen }) => {
  return (
    <div>
      <div className="Home">
        {/* <Navbar setIsUploadOpen={setIsUploadOpen} /> */}
        <Hero />
      </div>
    </div>
  );
};

export default Home;
