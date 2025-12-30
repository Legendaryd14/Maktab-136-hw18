// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "../../App.css";
import "./styles.css";
// import required modules
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

export function SocialProofLogos() {
  return (
    <div className="flex flex-col gap-3 items-center p-5">
      <h1 className="text-2xl font-bold text-[#003160]">Social Proof</h1>
      <Swiper
        autoplay={{ delay: 2000 }}
        rewind={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // effect="fade"
        loop={true}
        modules={[Pagination, Autoplay, EffectFade]}
        className="flex gap-1.5 "
      >
        <SwiperSlide className="py-15 w-30">Slide 1</SwiperSlide>
        <SwiperSlide className="py-15 w-30">Slide 2</SwiperSlide>
        <SwiperSlide className="py-15 w-30">Slide 3</SwiperSlide>
        <SwiperSlide className="py-15 w-30">Slide 4</SwiperSlide>
        <SwiperSlide className="py-15 w-30">Slide 5</SwiperSlide>
        <SwiperSlide className="py-15 w-30">Slide 6</SwiperSlide>
        <SwiperSlide className="py-15 w-30">Slide 7</SwiperSlide>
        <SwiperSlide className="py-15 w-30">Slide 8</SwiperSlide>
        <SwiperSlide className="py-15 w-30">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
