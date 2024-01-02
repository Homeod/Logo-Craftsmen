import React, { useState, useEffect, useRef } from "react";

import { hero_emb, hero_vector, hero_imgedits, hero_mockup } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const AnimatedDiv = ({ children }) => {
  const targetRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const animationClass = inView ? "animate" : "";

  return (
    <div
      ref={targetRef}
      className={`animated-div ${animationClass} flex justify-center items-center gap-6 py-10 flex-col  `}
    >
      {children}
    </div>
  );
};

const Hero = () => {
  // const targetRef = useRef(null);
  // const [inView, setInView] = useState(false);

  // useEffect(() => {
  //   const options = {
  //     root: null, // Use the viewport as the root
  //     rootMargin: "0px", // No margin around the root
  //     threshold: 0.5, // Trigger the callback when 50% of the target is visible
  //   };

  //   const handleIntersection = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setInView(true);
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, options);

  //   if (targetRef.current) {
  //     observer.observe(targetRef.current);
  //   }

  //   // Cleanup the observer on component unmount
  //   return () => {
  //     if (targetRef.current) {
  //       observer.unobserve(targetRef.current);
  //     }
  //   };
  // }, []); // Run the effect only once on mount

  // const animationClass = inView ? "animate" : "";

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className="w-full h-fit"
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
    >
      {/* Hero Embroidery */}

      <SwiperSlide className="w-screen swiper_main">
        <div className="relative">
          <div className="flex items-center justify-center ">
            <img
              src={hero_emb}
              className="lg:w-full lg:h-[600px] rounded-[20px] mx-10 my-4 h-[500px]"
            />
            <div className="absolute inset-0 bg-white bg-opacity-50 rounded-[20px] text-center ">
              <AnimatedDiv>
                <p className="lg:text-[65px] font-bold text-black font-playfair text-[40px] px-5">
                  Embroidery{" "}
                  <span className="text-blue-800 lg:text-[65px] font-bold font-playfair">
                    Design
                  </span>{" "}
                  Excellence!
                </p>
                <p className="lg:text-[45px] font-semibold font-playfair text-[30px] px-5">
                  From Logos to Apparel –
                  <span className="text-rose-900  lg:text-[45px] font-playfair text-[30px]">
                    Stitched Brilliance.
                  </span>
                </p>
                <p className="lg:text-[45px] font-playfair text-[30px] lg:mt-0 mt-10">
                  Price:{" "}
                  <span className="lg:text-[120px] font-semibold text-yellow-900 font-playfair text-[50px]">
                    $1
                  </span>
                  <span className="lg:text-[55px] font-semibold font-playfair">
                    / 1000
                  </span>
                  <span className="lg:text-[45px] text-black font-playfair text-[30px]">
                    {" "}
                    stitches
                  </span>
                </p>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute lg:bottom-2 -bottom-5"
                  href="/embroidery"
                >
                  Learn More
                </a>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Hero Vector */}

      <SwiperSlide className="w-screen">
        <div className="relative">
          <div className="flex items-center justify-center ">
            <img
              src={hero_vector}
              className="w-full lg:h-[600px] rounded-[20px] mx-10 my-4 h-[500px]"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 rounded-[20px]  ">
              <AnimatedDiv>
                <p className="lg:text-[65px] font-bold text-black font-playfair text-[40px] px-5  text-center">
                  Transform{" "}
                  <span className="text-pink-800 lg:text-[65px] text-[40px] font-bold font-playfair">
                    Raster{" "}
                  </span>
                  <span className="lg:text-[65px] font-bold font-playfair text-[40px]">
                    to{" "}
                  </span>
                  <span className=" lg:text-emerald-700 lg:text-[65px] font-playfair text-[40px] text-orange-900">
                    Vector
                  </span>{" "}
                  Magic!
                </p>
                <p className="lg:text-[45px] font-semibold font-playfair text-[30px] lg:ml-0 ml-14">
                  Elevate{" "}
                  <span className="text-blue-800 lg:text-[45px] font-playfair">
                    Designs
                  </span>{" "}
                  with Precision Vectors.
                </p>

                <p className="lg:text-[50px] font-semibold font-playfair text-[25px]">
                  Price Starting from{" "}
                  <span className="lg:text-[80px] font-bold font-playfair text-[40px] text-yellow-900">
                    $1.99
                  </span>
                </p>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute lg:-bottom-16 -bottom-6"
                  href="/vector"
                >
                  Learn More
                </a>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Hero Mockups */}

      <SwiperSlide className="w-screen">
        <div className="relative">
          <div className="flex items-center justify-center ">
            <img
              src={hero_mockup}
              className="lg:w-full lg:h-[600px] rounded-[20px] mx-10 my-4 h-[500px]"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 rounded-[20px] ">
              <AnimatedDiv>
                <p className="lg:text-[65px] font-bold text-black  font-playfair text-[40px]">
                  Products Mockup
                </p>
                <p className="lg:text-[45px] font-semibold  lg:px-20 font-playfair text-[30px]">
                  See Your{" "}
                  <span className=" lg:text-[45px] text-amber-700 font-playfair text-[30px]">
                    Brand
                  </span>{" "}
                  Shine!
                </p>
                <p className="lg:text-[35px] font-semibold  lg:px-20 font-playfair text-[20px] text-center ">
                  Our Promotional Products Mockup Service Lets You Preview{" "}
                  <span className=" text-red-700 lg:text-[35px] font-playfair">
                    Impact.
                  </span>
                </p>
                <p className="lg:text-[40px] font-semibold  lg:px-20 font-playfair text-[20px] text-center px-3">
                  From Pens to Apparel – Virtually Perfect Before Production.
                </p>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute lg:-bottom-16 -bottom-20"
                  href="/artvisuals"
                >
                  Learn More
                </a>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Image Edit */}

      <SwiperSlide className="w-screen">
        <div className="relative">
          <div className="flex items-center justify-center ">
            <img
              src={hero_imgedits}
              className="lg:w-full lg:h-[600px] rounded-[20px] mx-10 my-4 h-[500px]"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 rounded-[20px] ">
              <AnimatedDiv>
                <p className="lg:text-[65px] font-bold text-black  font-playfair text-[40px] text-center">
                  Image <br className="sm:hidden" />
                  Editing <br className="sm:hidden" />
                  Excellence !
                </p>
                <p className="lg:text-[55px] font-semibold lg:px-20 font-playfair text-[30px]">
                  <span className="lg:text-[55px]  text-rose-700 font-playfair">
                    Visual
                  </span>{" "}
                  Brilliance Begins!
                </p>
                <p className="lg:text-[50px] font-semibold lg:px-20 font-playfair  text-[30px] text-center">
                  <span className=" text-violet-900 font-playfair">
                    Perfect
                  </span>{" "}
                  your{" "}
                  <span className=" text-violet-900 font-playfair">Images</span>{" "}
                  with{" "}
                  <span className=" text-violet-900 font-playfair">
                    Precision
                  </span>
                  .
                </p>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute lg:-bottom-32 -bottom-8"
                  href="/imageedit"
                >
                  Learn More
                </a>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

/*
  <img
    src={logo2}
    className="h-[19rem]  w-[19rem]  absolute top-56 left-[22rem] rounded-2xl shadow-lg shadow-zinc-700"
  /> 
*/

export default Hero;
