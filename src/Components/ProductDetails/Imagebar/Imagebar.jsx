"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";

import t2 from "@/assets/t2.png";
import t1 from "@/assets/t1.png";

import t4 from "@/assets/t4.png";
import { ImageConfig } from "@/Config";

const Imagebar = ({imageList}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 "
      >

        {
          imageList?.map((image, index)=>{
            return(
              <SwiperSlide key={index}>

              {
                                        image
                                        &&
                                        <Image 
                                            src={  image?.startsWith("https") ?  image: `${ImageConfig}${image}`} 
                                            alt="Slide 2"
                                            width={800}
                                            height={400}
                                            style={{ height: "400px", backgroundColor: "#DADADA" }}
                                        />
              }
            </SwiperSlide>
            )
          })
        }
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper  "
      >
        
        {
          imageList?.map((image, index)=>{
            return(
              <SwiperSlide key={index}>
              <Image
                alt="Thumb 2"
                width={120}
                height={130}
                style={{
                  width: "100%",
                  height: "130px",
                  backgroundColor: "#DADADA",
                }}
                src={  image?.startsWith("https") ?  image: `${ImageConfig}${image}`} 
              />
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
};

export default Imagebar;
