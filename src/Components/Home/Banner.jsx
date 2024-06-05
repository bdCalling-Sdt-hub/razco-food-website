"use client";
import React, { useEffect, useRef } from "react";
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
import { getBanner } from "@/redux/apiSlice/Home/getBannerSlice"
import { useDispatch, useSelector } from "react-redux";
import { ImageConfig } from "@/Config";

const Banner = () => {
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (time) => {
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  const dispatch = useDispatch()
  const { banner } = useSelector(state=> state.banner);
  useEffect(()=>{
    dispatch(getBanner())
  }, [dispatch])

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
          el: "#containerForBullets",
          type: "bullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {
          banner?.map((item ,index)=>{
            return(
              <SwiperSlide key={index}>
                <Image
                  src={`${ImageConfig}${item?.bannerImage}`}
                  height={600}
                  width={1320}
                  alt=" "
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
};

export default Banner;
