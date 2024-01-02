import React from "react";
import {
  monkey,
  tiger,
  img2,
  Img4,
  embskull,
  img33,
  vectorcow,
  embdragon,
  CirDesign,
  ClubLogo,
  SchoolLogo,
  imgedit1,
  imgedit2,
  imgedit3,
  imgedit4,
  imgedit5,
  imgedit6,
  imgedit7,
  imgedit8,
  imgedit9,
} from "../assets";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Footer } from "../components";

const Portfolio = () => {
  return (
    <div className="">
      <div className="relative m-3 sm:m-10 bg-violet-100 rounded-[20px]">
        <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
          <motion.div>
            <section className="container mx-auto ">
              <p className={styles.sectionSubText}>Tour to the Logos </p>
              <p className={styles.sectionHeadText}>Showcases.</p>
              <p className="font-lobster text-5xl mt-16 flex justify-center underline">
                Our Vector Art
              </p>
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
                      src={Img4}
                      alt=""
                    />
                  </div>
                </div>

                <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                  <div className="mx-auto max-w-4xl">
                    <img
                      className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                      src={img33}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <p className="font-lobster text-5xl mt-16 flex justify-center underline">
                Our Embroidery Designs
              </p>
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
                      className="bg-green-100 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                      src={CirDesign}
                      alt=""
                    />
                  </div>
                </div>

                <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                  <div className="mx-auto max-w-4xl">
                    <img
                      className="bg-white h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                      src={ClubLogo}
                      alt=""
                    />
                  </div>
                </div>

                <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                  <div className="mx-auto max-w-4xl">
                    <img
                      className="bg-orange-200 py-9 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                      src={SchoolLogo}
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

                <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                  <div className="mx-auto max-w-4xl">
                    <img
                      className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                      src={embdragon}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <p className="font-lobster text-5xl mt-16 flex justify-center underline">
                Our Image Editing Service
              </p>
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
                      className="bg-green-100 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                      src={imgedit6}
                      alt=""
                    />
                  </div>
                </div>

                <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                  <div className="mx-auto max-w-4xl">
                    <img
                      className="bg-white h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                      src={imgedit3}
                      alt=""
                    />
                  </div>
                </div>

                <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                  <div className="mx-auto max-w-4xl">
                    <img
                      className="bg-orange-200 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                      src={imgedit5}
                      alt=""
                    />
                  </div>
                </div>

                <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                  <div className="mx-auto max-w-4xl">
                    <img
                      className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                      src={imgedit4}
                      alt=""
                    />
                  </div>
                </div>

                <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                  <div className="mx-auto max-w-4xl">
                    <img
                      className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                      src={imgedit7}
                      alt=""
                    />
                  </div>
                </div>

                <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                  <div className="mx-auto max-w-4xl">
                    <img
                      className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                      src={imgedit1}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
