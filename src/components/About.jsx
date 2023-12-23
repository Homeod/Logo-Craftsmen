import React from "react";

import { motion } from "framer-motion";
import { rect_img, square_img } from "../assets";
import { styles } from "../styles";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="pt-10 md:pt-10 bg-white">
      <div className="pb-2 w-full text-center ">
        <h2 className="pb-6 font-medium w-full text-center">About</h2>
        <h4 className="font-normal text-4xl font-serif text-violet-900">
          On a mission to
        </h4>
        <h4 className="pt-2 text-7xl font-serif text-violet-500">
          Crafting with Precision and Passion
        </h4>
      </div>

      <div className="m-1 sm:m-10">
        <div className="sm:px-10 lg:px-10 px-2 rounded-2xl min-h-[300px]">
          <motion.div>
            <section className="container mx-auto">
              <div className="relative bg-[url(https://static-cse.canva.com/blob/976320/Careers.png)] h-[500px] md:h-[400px] bg-no-repeat bg-cover bg-center rounded-[20px]">
                {/* <img
                  className="object-cover w-full h-64 md:h-96 sm:h-full opacity-50"
                  src={rect_img}
                  alt="Motivation img"
                /> */}
                <div className="absolute inset-0 bg-white bg-opacity-60 rounded-[20px] ">
                  <div className="m-10">
                    <p className={styles.sectionSubText}>What is </p>
                    <p className={styles.sectionHeadText}>Our Motivation.</p>
                    <p className="text-xl text-black text-center lg:mt-6">
                      What motivates us every day is the belief that every
                      design deserves to be transformed with precision, whether
                      for scaling in vector format or capturing intricate
                      details in embroidery. We are driven by the thrill of
                      turning your imagination into a tangible, scalable, and
                      exquisite masterpiece.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>

      <div className="m-3 sm:m-10 border-2 border-violet-400 bg-violet-100 rounded-[20px]">
        <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
          <motion.div>
            {/* <section className="container mx-auto "> */}
            <p className={styles.sectionSubText}>Lets talk about </p>
            <p className={styles.sectionHeadText}>Our Journey.</p>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="text-left">
                <p className="text-xl mt-4 ">
                  Welcome to{" "}
                  <span className="font-montserrat">Logo Craftsmen</span>, where
                  the art of vector and embroidery conversion in logo design
                  meets the precision of a craftsman's touch. Our journey began
                  more than 7 years ago when a passion for design and an
                  unwavering commitment to quality collided.
                  <br /> <br />
                  <span className="font-semibold underline underline-offset-4 ">
                    Our Vector and Embroidery Odyssey:
                  </span>
                  <br />
                  As a professional designer, I embarked on this journey with a
                  simple yet powerful mission: to bridge the gap between
                  creativity and craftsmanship. It all started with the
                  realization that while the design world was brimming with
                  potential, the need for precision and versatility was often
                  underestimated.
                  <br /> <br />
                  Vector conversion and embroidery design became the heart of
                  our work because we recognized their significance in enhancing
                  the quality and range of logo design. Over the years, our
                  journey led us to refine our skills and techniques, adapting
                  to the ever-evolving design landscape and the needs of our
                  clients.
                </p>
              </div>
              <div className="text-center">
                <img
                  className="object-cover w-full h-full md:h-auto rounded-[20px] sm:pb-0 pb-3"
                  src={square_img}
                  alt="Placeholder"
                />
              </div>
            </div>
            {/* </section> */}
          </motion.div>
        </div>
      </div>

      <div className="m-3 sm:m-10 border-2 border-orange-400 bg-orange-100 rounded-[20px]">
        <div className={`${styles.padding}  rounded-2xl min-h-[300px]`}>
          <motion.div>
            <p className={styles.sectionSubText}>Things we follow </p>
            <p className={styles.sectionHeadText}>Our Values.</p>
            <div className="container mx-auto px-4 py-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1 sm:gap-4">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 underline underline-offset-4 ">
                    Precision:
                  </h3>
                  <p className="text-black">
                  We believe in attention to detail and the pursuit of perfection in every project.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 underline underline-offset-4">
                  	Collaboration:
                  </h3>
                  <p className="text-black">
                  Your ideas and feedback are essential to the process, making every project a partnership.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 underline underline-offset-4">
                  Quality:
                  </h3>
                  <p className="text-black">
                  We never compromise on the quality of our work, ensuring that the final result is always exceptional.
                  </p>
                </div>
                <div className=" p-4">
                  <h3 className="text-xl font-semibold mb-2 underline underline-offset-4">
                  Customer-Centric Approach: 
                  </h3>
                  <p className="text-black">
                  Your satisfaction is our priority, and we're dedicated to making sure you're thrilled with the outcome.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="m-3 sm:m-10 border-2 border-green-400 bg-green-100 rounded-[20px]">
        <div className={`${styles.padding} rounded-2xl min-h-[200px] py-10 `}>
          <h1 className="text-3xl font-bold mb-4 text-center">
            Get started with Appling your design on your products
          </h1>
          <p className="mb-4 text-center">
            Contact us to experience the power of precision in vector and
            embroidery conversion, and let's bring your visions to life with
            craftsmanship and care. Your journey with Logo Craftsmen is not just
            about designs; it's about crafting legacies.
          </p>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Upload Your Files
            </button>
            <button className="bg-red-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded  m-4">
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
