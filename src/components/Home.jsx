import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FAQs from "./FAQs";

const Home = () => {
  return (
    <div>
      <div className="Home">
        <Navbar />
        <Hero />
      </div>
      <FAQs />
    </div>
  );
};

export default Home;
