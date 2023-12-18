import React from "react";
import { monkey } from "../assets";

const Showcase = () => {
  return (
    <div className="relative">
      <div className="flex min-h-screen items-center bg-gray-100 px-10 py-20 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
            <div className="h-96 w-auto">
              <img
                className="h-full max-w object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                src={monkey}
                alt="img"
              />
            </div>
          </div> */}

          <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
            <div className="mx-auto max-w-4xl">
              <img
                className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                src={monkey}
                alt=""
              />
            </div>
          </div>

          <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
            <div className="mx-auto max-w-4xl">
              <img
                className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                src={monkey}
                alt=""
              />
            </div>
          </div>

          <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
            <div className="mx-auto max-w-4xl">
              <img
                className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                src={monkey}
                alt=""
              />
            </div>
          </div>

          <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
            <div className="mx-auto max-w-4xl">
              <img
                className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                src={monkey}
                alt=""
              />
            </div>
          </div>

          <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
            <div className="mx-auto max-w-4xl">
              <img
                className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                src={monkey}
                alt=""
              />
            </div>
          </div>

          <div className="group relative items-center justify-center overflow-hidden cursor-pointer ">
            <div className=" mx-auto max-w-4xl ">
              <img
                className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl "
                src={monkey}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[352px] bg-gradient-to-t from-white to-transparent">
          <div className="flex h-full items-end justify-center">
            <a
              className="btn text-white bg-green-400  hover:bg-green-600 rounded-full px-2 py-2 shadow-lg mb-6"
              href=""
            >
              Start creating stunning images
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
