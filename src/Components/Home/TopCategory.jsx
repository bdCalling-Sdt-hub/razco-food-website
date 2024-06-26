"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Title from "@/Components/Share/Title";
import { getCategory } from "@/redux/apiSlice/Category/getCategorySlice"
import { useDispatch, useSelector } from "react-redux";
import { ImageConfig } from "@/Config";
import Link from "next/link";

const TopCategory = () => {
  const dispatch = useDispatch()
  const { categories } = useSelector(state=> state.getCategory);

  useEffect(()=>{
    dispatch(getCategory())
  }, [dispatch])

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
        <Link href={"/category"}>
          <p className="text-[12px] leading-[18px] font-medium text-[#5B52A3] underline">
            {" "}
            View All{" "}
          </p>
        </Link>
      </div>

      <div className="mt-16 relative">
        <div>
          <Slider {...settings}>
            {categories?.map((product, index) =>{
              return (
                <Link key={index} href={`/subCategory/${product?._id}`}>
                  <div className=" mx-auto">
                    <div className="relative w-[100px] h-[100px] overflow-hidden rounded mx-auto" >
                        <Image 
                            src={`${ImageConfig}${product?.categoryImage}`} 
                            alt="offer image"
                            layout="fill"
                            objectFit="cover"
                        />
                      </div>
                    <h4 className="poppins text-center text-lg  mt-2 ">{product?.categoryName}</h4>
                  </div>
                </Link>
              )
            } )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
