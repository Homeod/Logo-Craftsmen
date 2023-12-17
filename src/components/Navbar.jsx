import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
// import craftsmen from '../assets/craftsmen.png';
import { navLinks } from "../constents";
import { act } from "@react-three/fiber";
import { hamburg, closee, craftsmen } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={craftsmen}
            alt="logo"
            className="ml-auto sm:ml-2 md:ml-10 lg:ml-10 w-42 h-24 object-contain "
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 mr-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-black" : "text-neutral-500"
              } hover:text-black text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <Link to={`/${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? closee : hamburg}
            alt="hamburg"
            className="w-[28px] h-[28px] object-contain cursor-pointer mr-1"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute w-full h-fit top-0 left-0 mt-24 bg-gray-50  
          z-10 flex items-center justify-around`}
          >
            <ul className="list-none flex justify-end items-center flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-black" : "text-neutral-500"
                  } hover:text-black text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <Link to={`/${link.id}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
