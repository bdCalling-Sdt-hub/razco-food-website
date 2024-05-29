"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "@/assets/fruit1.png";
import img3 from "@/assets/fruit2.png";

import Image from "next/image";
import {
  HeartOutlined,
  LeftOutlined,
  RightOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Title from "@/Components/Share/Title";

const products = [
  {
    key: "1",
    imgURL: (
      <Image
        src={img2}
        width={300}
        height={40}
        alt=" "
        className="mx-auto bg-gray-200 rounded "
      />
    ),
    title: "Fruits & Vegetables",
  },

  {
    key: "2",
    imgURL: (
      <Image
        src={img3}
        width={300}
        height={40}
        alt=" "
        className="mx-auto bg-gray-200 rounded"
      />
    ),
    title: "Dairy & Breakfast",
  },

  {
    key: "3",
    imgURL: (
      <Image
        src={img2}
        width={300}
        height={40}
        alt=" "
        className="mx-auto bg-gray-200 rounded"
      />
    ),
    title: "Dairy & Breakfast",
  },

  {
    key: "4",
    imgURL: (
      <Image
        src={img3}
        width={300}
        height={40}
        alt=" "
        className="mx-auto bg-gray-200 rounded"
      />
    ),
    title: "Dairy & Breakfast",
  },

  {
    key: "5",
    imgURL: (
      <Image
        src={img2}
        width={300}
        height={40}
        alt=" "
        className="mx-auto bg-gray-200 rounded"
      />
    ),
    title: "Dairy & Breakfast",
  },
  {
    key: "6",
    imgURL: (
      <Image
        src={img3}
        width={300}
        height={40}
        alt=" "
        className="mx-auto bg-gray-200 rounded"
      />
    ),
    title: "Dairy & Breakfast",
  },
  {
    key: "7",
    imgURL: (
      <Image
        src={img2}
        width={300}
        height={40}
        alt=" "
        className="mx-auto bg-gray-200 rounded"
      />
    ),
    title: "Dairy & Breakfast",
  },
  {
    key: "8",
    imgURL: (
      <Image
        src={img3}
        width={300}
        height={40}
        alt=" "
        className="mx-auto bg-gray-200 rounded"
      />
    ),
    title: "Dairy & Breakfast",
  },
];

const NewArrival = () => {
  const sliderRef = useRef();

  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow next-arrow " onClick={onClick}>
      <RightOutlined className=" bg-[#EFEEF6] p-1 text-[#666666] text-xl rounded" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev-arrow " onClick={onClick}>
      <LeftOutlined className=" bg-[#EFEEF6] p-1 text-[#666666] text-xl rounded" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slideNext = () => {
    sliderRef.current.slickNext();
  };

  const slidePrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className=" lg:ms-[270px] lg:me-[250px] mt-20 mb-20 relative">
      <div className="flex  justify-between  border-b-2  border-[#EDEDED]  ">
        <Title className="border-b-2 border-[#7CC84E]"> New Arrival </Title>
        <p className="text-lg font-semibold text-[#666666] "> View All </p>
      </div>

      <div className="flex gap-2 absolute right-3 pt-3 ">
        <button>
          <PrevArrow onClick={slidePrev} />
        </button>
        <button>
          <NextArrow onClick={slideNext} />
        </button>
      </div>
      <div className="slider-container ">
        <Slider {...settings} ref={sliderRef}>
          {products.map((product) => (
            <div key={product.key} className=" mx-auto mt-16">
              <div className="bg-gray-100 shadow-sm rounded  lg:w-72 w-full py-3 relative ">
                <p className="px-3"> {product.imgURL}</p>
                <p className=" text-[#7CC84E] absolute right-5 top-4 text-2xl">
                  {" "}
                  <HeartOutlined />{" "}
                </p>
                <div className="px-5 pb-5">
                  <div className="flex justify-between px-1 pt-3">
                    <h3 className="text-[555656] font-medium text-xl tracking-tight ">
                      {product.title}
                    </h3>
                    <p className="text-[#929394] text-sm "> 1 pc</p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <p className="text-xl font-semibold text-[#7CC84E] ">
                      $5{" "}
                      <span className="text-sm font-medium text-red-600 ps-2 line-through">
                        {" "}
                        $7
                      </span>
                    </p>

                    <p className="text-[#7CC84E] bg-white  font-semibold rounded-lg text-2xl px-4 py-2 text-center">
                      <ShoppingCartOutlined />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewArrival;
