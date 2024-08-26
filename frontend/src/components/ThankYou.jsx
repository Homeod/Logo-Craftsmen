import React from "react";
import { styles } from "../styles";
import { thankyou } from "../assets";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ThankYou = () => {
  return (
    <div>
      <Helmet>
        <title>Thank You | Logo Craftsmen </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="m-3 sm:m-10 flex flex-col bg-fuchsia-100 rounded-[20px]">
        <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
          <h2 className={styles.sectionSubText}>
            We Appreciate your time for filling out the information
          </h2>
          <h2 className={styles.sectionHeadText}>Thank You...</h2>
          <div className="mx-auto bg-slate-50 rounded-md p-5 flex flex-col lg:flex-row">
            <div className="flex-1">
              <img
                src={thankyou}
                alt="thankyou"
                className="lg:w-[90%] xs:w-full rounded-md"
              />
            </div>
            <div className="flex flex-col gap-5 lg:gap-8 flex-1">
              <div className="pt-5 lg:pt-10">
                <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold font-cabin">
                  We appreciate your interest in our services.
                </h2>
              </div>
              <div>
                <h2 className="lg:text-3xl text-xl font-cabin font-bold">
                  Thank you for submitting your request! Our team will be in
                  touch with you shortly via email or phone. Please stay tuned
                  to your inbox for our message.
                </h2>
              </div>
              <div>
                <h2 className="lg:text-3xl text-xl font-cabin font-bold mb-3">
                  Explore More Services:
                </h2>
                {/* Buttons Container */}
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/vector">
                    <Button label="Vector Conversion" />
                  </Link>
                  <Link to="/embroidery">
                    <Button label="Embroidery Digitizing" />
                  </Link>
                  <Link to="/artvisuals">
                    <Button label="Art / Virtual Proofs" />
                  </Link>
                  <Link to="/imageedit">
                    <Button label="Image Editing" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Button Component
const Button = ({ label }) => (
  <button className="relative w-full h-16 bg-transparent border border-blue-400 text-black rounded font-light text-lg overflow-hidden transition-all duration-500 ease-in-out group hover:bg-blue-500">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 180 60"
      className="absolute inset-0"
    >
      <polyline
        points="179,1 179,59 1,59 1,1 179,1"
        className="stroke-white transition-all duration-500 ease-in-out group-hover:stroke-dashoffset-[-480]"
        fill="none"
        strokeWidth="2"
        strokeDasharray="150 480"
        strokeDashoffset="150"
      />
    </svg>
    <span className="relative">{label}</span>
  </button>
);

export default ThankYou;
