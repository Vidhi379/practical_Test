import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import "./styles.css";

const TextSlider = () => {
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="my-4"
    >
      <SwiperSlide className="slider-text">
        <b>A BUSINESS PROUDLY RUN BY A TEAM OF</b> DIVERSE WOMEN.
      </SwiperSlide>
      <SwiperSlide className="slider-text">
        <b>A BUSINESS PROUDLY RUN BY A TEAM OF</b> DIVERSE WOMEN.
      </SwiperSlide>
      <SwiperSlide className="slider-text">
        <b>A BUSINESS PROUDLY RUN BY A TEAM OF</b> DIVERSE WOMEN.
      </SwiperSlide>
      <SwiperSlide className="slider-text">
        <b>A BUSINESS PROUDLY RUN BY A TEAM OF</b> DIVERSE WOMEN.
      </SwiperSlide>
    </Swiper>
  );
};

export default TextSlider;
