import React from "react";
import Itemscontainerfooter from "./Itemscontainerfooter";
import SocialIcons from "./SocialIcons";
import { Icons } from "../constents";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <Itemscontainerfooter />
      <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 ">
        <SocialIcons Icons={Icons} />
        <span>© 2023 Apply.All rights reserved.</span>
        <span>Terms . Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
