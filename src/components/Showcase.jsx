import React from "react";
import {
  monkey,
  tiger,
  img2,
  embskull,
  img33,
  vectorcow,
  embdragon,
} from "../assets";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Showcase = () => {
  return (
    // <div className="relative">
    <div className="relative m-3 sm:m-10 bg-violet-100 rounded-[20px]">
      <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
        <motion.div>
          <section className="container mx-auto ">
            <p className={styles.sectionSubText}>Tour to the Logos </p>
            <p className={styles.sectionHeadText}>Showcases</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ">
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
                    src={img2}
                    alt=""
                  />
                </div>
              </div>

              <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                <div className="mx-auto max-w-4xl">
                  <img
                    className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                    src={vectorcow}
                    alt=""
                  />
                </div>
              </div>

              <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                <div className="mx-auto max-w-4xl">
                  <img
                    className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                    src={tiger}
                    alt=""
                  />
                </div>
              </div>

              <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                <div className="mx-auto max-w-4xl">
                  <img
                    className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                    src={embskull}
                    alt=""
                  />
                </div>
              </div>

              <div className="group relative items-center justify-center overflow-hidden cursor-pointer ">
                <div className=" mx-auto max-w-4xl ">
                  <img
                    className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl "
                    src={embdragon}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[352px] bg-gradient-to-t from-white to-transparent">
              <div className="flex h-full items-end justify-center">
                <a
                  className="btn text-white bg-green-400  hover:bg-green-600 rounded-full px-2 py-2 shadow-lg mb-6"
                  href="/portfolio"
                >
                  There's More To Explore
                </a>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
    // </div>
  );
};

export default Showcase;
