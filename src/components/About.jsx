import React from "react";
import { useState } from "react";

import { rect_img, square_img } from "../assets";

const About = () => {
  return (
    <div className="py-10 md:py-10 bg-white">
      <div className="pb-10 md:pb-12 w-full text-center ">
        <h2 className="pb1 md:pb-6 sm:text-3xl font-medium w-full text-center text-2xl">
          About Us
        </h2>
        <h4 className="px-8 py-2 md:px-24 md:py-2 font-normal">
          Logo Craftsmen - Crafting with Precision and Passion
        </h4>
      </div>

      <div className="py-10 px-10 flex-col justify-center items-center">
        <h2 className="text-center font-semibold text-4xl m-5">
          {" "}
          Our commitments{" "}
        </h2>
        <img
          src={rect_img}
          alt="img"
          className="rounded-[8rem] py-10 flex justify-center items-center"
        />
        <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
          <img
            className="absolute left-0 top-0 object-cover w-1/2 h-full"
            src={square_img}
            alt="Image 1"
          />
          <img
            className="absolute right-0 top-0 object-cover w-1/2 h-full"
            src={square_img}
            alt="Image 2"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
