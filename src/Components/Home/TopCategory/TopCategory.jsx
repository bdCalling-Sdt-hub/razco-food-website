"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "@/assets/ctgry2.png";
import img3 from "@/assets/ctgry3.png";
import img4 from "@/assets/ctgry4.png";
import img5 from "@/assets/ctgry5.png";
import img6 from "@/assets/ctgry6.png";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const products = [
  {
    key: "1",
    imgURL: (
      <Image src={img5} width={150} height={40} alt=" " className="mx-auto" />
    ),
    title: "Fruits & Vegetables",
  },

  {
    key: "2",
    imgURL: (
      <Image src={img2} width={150} height={40} alt=" " className="mx-auto" />
    ),
    title: "Dairy & Breakfast",
  },

  {
    key: "3",
    imgURL: (
      <Image src={img3} width={150} height={40} alt=" " className="mx-auto" />
    ),
    title: "Dairy & Breakfast",
  },

  {
    key: "4",
    imgURL: (
      <Image src={img4} width={150} height={40} alt=" " className="mx-auto" />
    ),
    title: "Dairy & Breakfast",
  },

  {
    key: "5",
    imgURL: (
      <Image src={img5} width={150} height={40} alt=" " className="mx-auto" />
    ),
    title: "Dairy & Breakfast",
  },
  {
    key: "6",
    imgURL: (
      <Image src={img6} width={150} height={40} alt=" " className="mx-auto" />
    ),
    title: "Dairy & Breakfast",
  },
  {
    key: "7",
    imgURL: (
      <Image src={img3} width={150} height={40} alt=" " className="mx-auto" />
    ),
    title: "Dairy & Breakfast",
  },
  {
    key: "8",
    imgURL: (
      <Image src={img2} width={150} height={40} alt=" " className="mx-auto" />
    ),
    title: "Dairy & Breakfast",
  },
];

const TopCategory = () => {
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
    slidesToShow: 5,
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
    <div className=" lg:ms-[270px] lg:me-[250px] relative px-4 mb-20 ">
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
            <div key={product.key} className="  me-3 mx-auto m-4 p-5 mt-10">
              <p> {product.imgURL}</p>
              <h4 className=" text-center text-lg  mt-2 ">{product.title}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopCategory;
