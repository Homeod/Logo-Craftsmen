import React from "react";
import Itemscontainerfooter from "./Itemscontainerfooter";
import SocialIcons from "./SocialIcons";
import { Icons } from "../constents";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 ">
            <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md: w-2/5"><span className="text-teal-400">Connect </span>with us to get more details
            </h1>
            <div>
                <input type="text" placeholder="Enter Your E-mail" 
                className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none" />
                <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white ">Submit</button>
            </div>
            
        </div> */}
      <Itemscontainerfooter />
      <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 ">
        <SocialIcons Icons={Icons} />
        <span>© 2023 Apply.All rights reserved.</span>
        <span>
          {" "}
          <a href="/terms">Terms</a> . <a href="/privacy">Privacy Policy</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
