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
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Title from "@/Components/Share/Title";
import Link from "next/link";

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
  const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button {...props} className="prev">
      <BiChevronLeft size={24} color="#B7B8B9" style={{ margin: "0 auto" }} />
    </button>
  );

  const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button {...props} className="next">
      <BiChevronRight size={24} color="#B7B8B9" style={{ margin: "0 auto" }} />
    </button>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container pb-20">
      <div className="flex items-center justify-between  border-b-2  border-[#EDEDED]  ">
        <Title className="border-b-[3px] border-[#7CC84E]">
          Top Categories
        </Title>
        <Link href={"/shop"}>
          <p className="text-[12px] leading-[18px] font-medium text-[#5B52A3] underline">
            {" "}
            View All{" "}
          </p>
        </Link>
      </div>

      <div className="mt-16 relative">
        <div>
          <Slider {...settings}>
            {products.map((product) => (
              <Link key={product.key} href={"/productDetails"}>
                <div className=" mx-auto font-[poppins]">
                  <p> {product.imgURL}</p>
                  <h4 className=" text-center text-lg  mt-2 ">
                    {product.title}
                  </h4>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
