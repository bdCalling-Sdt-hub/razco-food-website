"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "@/assets/fruit1.png";
import img3 from "@/assets/fruit2.png";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Image from "next/image";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Title from "@/Components/Share/Title";
import Link from "next/link";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

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
    slidesToShow: 4,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [hasFavorited, setHasFavorited] = useState(Array(12).fill(false));
  
  const handleWish = (e, index) => {
    e.stopPropagation();
    e.preventDefault();
    const newFavoriteStatuses = [...hasFavorited];
    newFavoriteStatuses[index] = !newFavoriteStatuses[index];
    setHasFavorited(newFavoriteStatuses);
};


const handleCart=(e)=>{
    console.log("clicked")
    e.stopPropagation();
    e.preventDefault();
    window.location.replace("/addCart")
}



  return (
    <div className="container my-20">
      <div className="flex items-center justify-between  border-b-2  border-[#EDEDED]  ">
        <Title className="border-b-[3px] border-[#7CC84E]"> New Arrival </Title>
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
                <div className=" mx-auto pl-3">
                  <div className="bg-gray-100 shadow-sm rounded  py-3 relative ">
                    <p className="px-3"> {product.imgURL}</p>



                    <div
                                        className="
                                            absolute  top-4 right-4
                                            hover:opacity-80
                                            transition
                                            cursor-pointer
                                        "
                                        onClick={(e) => handleWish(e, product.key)}
                                    >
                                        <AiOutlineHeart
                                            size={28}
                                            className="
                                                fill-white
                                                absolute
                                                -top-[2px]
                                                -right-[2px]
                                            "
                                        />
                                        <AiFillHeart
                                            size={24}
                                            className={
                                                `${ hasFavorited[product.key] ? "fill-rose-500 " : "fill-neutral-500/70" }`
                                            }
                                        />
                    </div>



                    <div className="px-5 pb-5">
                      <div className="flex justify-between px-1 pt-3">
                        <h3 className="text-[555656] font-medium text-xl tracking-tight ">
                          {product.title}
                        </h3>
                        <p className="text-[#929394] text-sm "> 1 pc</p>
                      </div>

                      <div className="flex items-center justify-between  py-2">
                        <p className="text-xl font-semibold text-[#7CC84E] ">
                          $5{" "}
                          <span className="text-sm font-medium text-red-600 ps-2 line-through">
                            {" "}
                            $7
                          </span>
                        </p>

                        <p onClick={handleCart} className="text-[#7CC84E] bg-white  font-semibold rounded-lg text-2xl px-4 py-2 text-center">
                          <ShoppingCartOutlined />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
