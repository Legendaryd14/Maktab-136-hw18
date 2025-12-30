// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Socialproof2() {
  return (
    <div className="bg-[#003160] w-full h-screen">
      <Swiper
        autoplay={{ delay: 5000 }}
        rewind={true}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide className="flex flex-col scale-[70%] bg-none rounded-2xl">
          <div className="bg-white text-[#003160] p-30 leading-10 relative w-full h-full text-3xl font-medium rounded-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis enim quod itaque facere quaerat voluptate similique
            nulla optio dolor rem laudantium ea ad dolorum voluptatum, ipsa
            soluta nobis modi, dignissimos adipisci laborum? Fugit, delectus.
            Suscipit saepe ipsam sequi quod consectetur, totam sint pariatur
            aliquam ducimus soluta, fugit quidem eligendi accusantium impedit.
            Provident accusantium sequi architecto animi, magnam veniam repellat
            quam doloribus cumque ipsa porro ad distinctio sit mollitia quos
            labore commodi facilis velit esse. A quidem ex asperiores ea vero.
            Hic tenetur iure accusamus voluptatibus totam fugiat consectetur
            repellendus consequuntur? Incidunt, velit mollitia doloremque
            commodi dolorem hic id culpa necessitatibus!
          </div>
          <div className="h-40 w-40 fixed top-225 left-210 border-white border-4 rounded-[100%]">
            <img
              src=""
              alt="placeholder"
              className="rounded-[100%] border-2 border-[#90C5F7]    bg-white"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col scale-[70%] bg-none rounded-2xl">
          <div className="bg-white text-[#003160] p-30 leading-10 relative w-full h-full text-3xl font-medium rounded-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis enim quod itaque facere quaerat voluptate similique
            nulla optio dolor rem laudantium ea ad dolorum voluptatum, ipsa
            soluta nobis modi, dignissimos adipisci laborum? Fugit, delectus.
            Suscipit saepe ipsam sequi quod consectetur, totam sint pariatur
            aliquam ducimus soluta, fugit quidem eligendi accusantium impedit.
            Provident accusantium sequi architecto animi, magnam veniam repellat
            quam doloribus cumque ipsa porro ad distinctio sit mollitia quos
            labore commodi facilis velit esse. A quidem ex asperiores ea vero.
            Hic tenetur iure accusamus voluptatibus totam fugiat consectetur
            repellendus consequuntur? Incidunt, velit mollitia doloremque
            commodi dolorem hic id culpa necessitatibus!
          </div>
          <div className="h-40 w-40 fixed top-225 left-210 border-white border-4 rounded-[100%]">
            <img
              src=""
              alt="placeholder"
              className="rounded-[100%] border-2 border-[#90C5F7]    bg-white"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col scale-[70%] bg-none rounded-2xl">
          <div className="bg-white text-[#003160] p-30 leading-10 relative w-full h-full text-3xl font-medium rounded-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis enim quod itaque facere quaerat voluptate similique
            nulla optio dolor rem laudantium ea ad dolorum voluptatum, ipsa
            soluta nobis modi, dignissimos adipisci laborum? Fugit, delectus.
            Suscipit saepe ipsam sequi quod consectetur, totam sint pariatur
            aliquam ducimus soluta, fugit quidem eligendi accusantium impedit.
            Provident accusantium sequi architecto animi, magnam veniam repellat
            quam doloribus cumque ipsa porro ad distinctio sit mollitia quos
            labore commodi facilis velit esse. A quidem ex asperiores ea vero.
            Hic tenetur iure accusamus voluptatibus totam fugiat consectetur
            repellendus consequuntur? Incidunt, velit mollitia doloremque
            commodi dolorem hic id culpa necessitatibus!
          </div>
          <div className="h-40 w-40 fixed top-225 left-210 border-white border-4 rounded-[100%]">
            <img
              src=""
              alt="placeholder"
              className="rounded-[100%] border-2 border-[#90C5F7]    bg-white"
            />
          </div>
        </SwiperSlide>  
      </Swiper>
    </div>
  );
}
