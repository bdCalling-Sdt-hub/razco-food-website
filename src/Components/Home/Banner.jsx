"use client";
import React, { useRef } from "react";
import banner1 from "@/assets/Banner.png";
import banner2 from "@/assets/Banner1.png";
import banner3 from "@/assets/Banner2.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (time) => {
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="container my-6 md:my-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={banner1}
            height={600}
            width={1320}
            alt=" "
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={banner2}
            width={1320}
            height={600}
            alt=" "
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={banner3}
            width={1320}
            height={600}
            alt=" "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
