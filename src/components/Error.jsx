import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import {
  CirDesign,
  ClubLogo,
  CompLogo,
  CrickLogo,
  PecksHoodie,
  SchoolLogo,
} from "../assets";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="m-3 sm:m-10 border-2 border-violet-400 bg-violet-100 rounded-[20px]">
      <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
        {/* <div className="p-10 rounded-2xl min-h-[300px]"> */}
        <motion.div>
          <p className={styles.sectionSubText}>Upppseyy!!! </p>
          <p className={`${styles.sectionHeadText}flex justify-between`}>
            Wrong Place.
          </p>

          <div className="container ">
            <p className="mt-4 text-center text-semibold font-sans text-xl ">
              Its Looks like You've have been lost.
            </p>
            <div className="flex flex-row justify-center items-center">
              <p className=" text-center text-bold font-bold text-[120px]">4</p>
              <img
                src={CirDesign}
                alt="Image"
                className="w-[120px] h-[120px]"
              />
              <p className=" text-center text-bold font-bold text-[120px]">4</p>
            </div>
            <p className="text-center text-xl">
              Maybe you want to head back to our main page to find the
              place you are looking for
            </p>
            <Link to="/">
              <button className="flex justify-center mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ">
                Take me Home
              </button>
            </Link>           
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Error;
