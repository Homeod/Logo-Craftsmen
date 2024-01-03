import React from "react";
import { Link } from "react-router-dom";

const Itemsfooter = ({ Links, title }) => {
  return (
    <div className="flex justify-center">
      <ul>
        <h1 className="mb-1 font-semibold underline underline-offset-8 text-center">
          {title}
        </h1>
        {Links.map((link) => (
          <li key={link.name}>
            <Link
              className="text-gray-400 hover:text-teal-400 duration-300 flex justify-center items-center "
              to={link.link}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // Optional: Add smooth scrolling behavior
                });
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Itemsfooter;
