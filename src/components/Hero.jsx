import React, { useState, useEffect, useRef } from "react";

import logo1 from "../assets/Img1.jpg";
import { hero_emb, hero_vector, hero_imgedits, hero_mockup } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  const targetRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin around the root
      threshold: 0.5, // Trigger the callback when 50% of the target is visible
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

    // Cleanup the observer on component unmount
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []); // Run the effect only once on mount

  const animationClass = inView ? "animate" : "";

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
      pagination={true}
    >
      {/* Hero Embroidery */}

      <SwiperSlide className="w-screen">
        <div>
          <div className="flex items-center justify-center ">
            <img
              src={hero_emb}
              className="w-full h-[600px] rounded-[20px] mx-10 my-4"
            />
            <div className="absolute inset-0 bg-white bg-opacity-50 rounded-[20px] ">
              <div
                ref={targetRef}
                className={`animated-div ${animationClass} flex justify-center items-center gap-6 py-10 flex-col  `}
              >
                <p className="text-[65px] font-bold text-black font-serif">
                  Embroidery{" "}
                  <span className="text-blue-800 text-[100px] font-dancing font-bold">
                    Design
                  </span>{" "}
                  Excellence!
                </p>
                <p className="text-[45px] font-semibold font-cabin">
                  From Logos to Apparel –
                  <span className="text-rose-900 font-cabin text-[55px]">
                    Stitched Brilliance.
                  </span>
                </p>
                <p className="text-[30px]">
                  Price:{" "}
                  <span className="text-[120px] font-semibold text-yellow-900">
                    $1
                  </span>
                  <span className="text-[55px] font-semibold italic ">
                    / 1000
                  </span>
                  <span className="font-cabin text-[45px] text-black">
                    {" "}
                    stitches
                  </span>
                </p>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  href="/embroidery"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Hero Vector */}

      <SwiperSlide className="w-screen">
        <div>
          <div className="flex items-center justify-center ">
            <img
              src={hero_vector}
              className="w-full h-[600px] rounded-[20px] mx-10 my-4"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 rounded-[20px] ">
              <div
                ref={targetRef}
                className={`animated-div ${animationClass} flex justify-center items-center gap-6 py-10 flex-col  `}
              >
                <p className="text-[45px] font-bold text-black font-serif">
                  Transform{" "}
                  <span className="text-pink-800 text-[70px] font-pacifico font-bold">
                    Raster{" "}
                  </span>
                  to{" "}
                  <span className="font-lobster text-emerald-700  text-[80px] ">
                    Vector
                  </span>{" "}
                  Magic!
                </p>
                <p className="text-[45px] font-semibold font-cabin">
                  Elevate{" "}
                  <span className="text-blue-800 font-cabin">Designs</span> with
                  Precision Vectors.
                </p>
                <br /><br />
                <p className="text-[30px] font-semibold">
                  Price Starting from <span className="text-[60px] font-bold italic">$1.99</span>
                </p>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  href="/vector"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="w-screen">
        <div>
          <div className="flex items-center justify-center ">
            <img
              src={hero_mockup}
              className="w-full h-[600px] rounded-[20px] mx-10 my-4"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 rounded-[20px] ">
              <div
                ref={targetRef}
                className={`animated-div ${animationClass} flex justify-center items-center gap-12 py-10 flex-col  `}
              >
                <p className="text-[55px] font-bold text-black font-anton">
                  Products Mockup
                </p>
                <p className="text-[35px] font-semibold font-serif px-20">
                  See Your{" "}
                  <span className="font-lobster text-[55px] text-amber-700">
                    Brand
                  </span>{" "}
                  Shine!
                </p>
                <p className="text-[35px] font-semibold font-cabin px-20">
                  Our Promotional Products Mockup Service Lets You Preview
                  <span className="italic font-cabin text-red-700 text-[55px]">Impact.</span>
                </p>
                <p className="text-[40px] font-semibold font-lobster px-20">
                  From Pens to Apparel – Virtually Perfect Before Production.
                </p>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  href="/artvisuals"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-screen">
        <div>
          <div className="flex items-center justify-center ">
            <img
              src={hero_imgedits}
              className="w-full h-[600px] rounded-[20px] mx-10 my-4"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 rounded-[20px] ">
              <div
                ref={targetRef}
                className={`animated-div ${animationClass} flex justify-center items-center gap-12 py-20 flex-col  `}
              >
                <p className="text-[55px] font-bold text-black font-lobster">
                  Image Editing Excellence
                </p>
                <p className="text-[35px] font-semibold font-serif px-20">
                  <span className="text-[55px] font-pacifico text-rose-700">
                    Visual
                  </span>{" "}
                  Brilliance Begins!
                </p>
                <p className="text-[50px] font-semibold font-sans px-20">
                  <span className="italic font-mono text-violet-900 text-[65px]">
                    Perfect
                  </span>{" "}
                  your{" "}
                  <span className="italic font-mono text-violet-900 text-[65px]">
                    Images
                  </span>{" "}
                  with{" "}
                  <span className="italic font-mono text-violet-900 text-[65px]">
                    Precision
                  </span>
                  .
                </p>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  href="/imageedit"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
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
