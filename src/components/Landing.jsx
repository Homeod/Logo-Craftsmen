import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../assets/Img1.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
const Landing = () => {
  return (
    //Tentative carousel
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        // }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          {/* <div className="swiper-button-prev slider-arrow"> */}
          {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
          {/* </div> */}
          {/* <div className="swiper-button-next slider-arrow"> */}
          {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
          {/* </div> */}
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Landing;
