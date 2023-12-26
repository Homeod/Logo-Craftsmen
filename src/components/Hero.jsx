import React from "react";
import logo1 from "../assets/Img1.jpg";
import Mix1 from "../assets/Mix1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
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
    >
      <SwiperSlide className="w-screen bg-violet-50">
        <div className="grid md:grid-cols-2 md:grid-rows-1 auto-rows-min md:gap-2 gap-4 px-8 py-16 ">
          <div className="flex flex-col gap-6 mt-8 md:px-8 md:py-6">
            <div>
              <div className="md:text-4xl text-2xl leading-8 md:leading-snug md:text-start text-center font-black tracking-widest">
                The Embriodary Art
              </div>
              <div className="absolute flex justify-center items-center object-center">
                <div className="absolute w-96 h-96 bg-blue-300 top-1 rounded-full opacity-70 mix-blend-multiply filter blur-2xl animate-blob"></div>
                <div className="absolute w-96 h-96 bg-pink-300 top-4 left-5 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                <div className="absolute w-96 h-96 bg-orange-300 bottom- rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              </div>
            </div>
            <div className="md:text-lg text-md md:text-start text-center z-50">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </div>
            <div className="flex gap-4 items-center md:justify-start justify-around z-50">
              <button className="bg-blue-400 md:px-6 md:py-3 px-4 py-2 text-white rounded-lg">
                Shop Here
              </button>
              <button className="bg-blue-400 md:px-6 md:py-3 px-4 py-2 text-white rounded-lg">
                Try it Out
              </button>
            </div>
          </div>
          <div className="relative flex items-center justify-center mx-auto my-6 ">
            <div className="absolute flex justify-center items-center object-center">
              <div className="absolute w-96 h-96 bg-purple-300 left-6 rounded-full opacity-70 mix-blend-multiply filter blur-2xl animate-blob"></div>
              <div className="absolute w-96 h-96 bg-yellow-300 right-8 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute w-96 h-96 bg-pink-300 -bottom-2 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            </div>
            <img
              src={Mix1}
              className="md:w-full md:h-[24rem] sm:w-[60vw] mx-auto rounded-2xl shadow-zinc-700 z-50"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-screen">
        <div className="grid md:grid-cols-2 md:grid-rows-1 auto-rows-min md:gap-2 gap-4 px-8 py-16  ">
          <div className="flex flex-col gap-6 mt-8 md:px-8 md:py-6">
            <div>
              <div className="md:text-4xl text-2xl leading-8 md:leading-snug md:text-start text-center font-black tracking-widest">
                The Vector Art
              </div>
            </div>
            <div className="md:text-lg text-md md:text-start text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </div>
            <div className="flex gap-4 items-center md:justify-start justify-around">
              <button className="bg-blue-400 md:px-6 md:py-3 px-4 py-2 text-white rounded-lg">
                Shop Here
              </button>
              <button className="bg-blue-400 md:px-6 md:py-3 px-4 py-2 text-white rounded-lg">
                Try it Out
              </button>
            </div>
          </div>
          <div className=" relative flex items-center justify-center mx-auto my-6 ">
            <div className="absolute flex justify-center items-center object-center">
              <div className="absolute w-96 h-96 bg-purple-300 left-6 rounded-full opacity-70 mix-blend-multiply filter blur-2xl animate-blob"></div>
              <div className="absolute w-96 h-96 bg-yellow-300 right-8 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute w-96 h-96 bg-pink-300 -bottom-2 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            </div>
            <img
              src={Mix1}
              className="md:w-full md:h-[24rem] sm:w-[60vw] mx-auto rounded-2xl shadow-zinc-700 z-50 "
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-screen">
        <div className="grid md:grid-cols-2 md:grid-rows-1 auto-rows-min md:gap-2 gap-4 px-8 py-16  ">
          <div className="flex flex-col gap-6 mt-8 md:px-8 md:py-6">
            <div>
              <div className="md:text-4xl text-2xl leading-8 md:leading-snug md:text-start text-center font-black tracking-widest">
                The Image Editing Art
              </div>
            </div>
            <div className="md:text-lg text-md md:text-start text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </div>
            <div className="flex gap-4 items-center md:justify-start justify-around">
              <button className="bg-blue-400 md:px-6 md:py-3 px-4 py-2 text-white rounded-lg">
                Shop Here
              </button>
              <button className="bg-blue-400 md:px-6 md:py-3 px-4 py-2 text-white rounded-lg">
                Try it Out
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto my-6 ">
            <img
              src={Mix1}
              className="md:w-full md:h-[24rem] sm:w-[60vw] mx-auto rounded-2xl shadow-zinc-700 "
            />
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
