"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "@/assets/fruit1.png";
import img3 from "@/assets/fruit2.png";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Image from "next/image";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import Link from "next/link";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedProduct } from "@/redux/apiSlice/Product/getRelatedProductSlice";
import { ImageConfig } from "@/Config";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { makeWish } from "@/redux/apiSlice/Wish/makeWishSlice";
import toast from "react-hot-toast";
import { makeCart } from "@/redux/apiSlice/Cart/makeCartSlice";


const RelatedProduct = ({id}) => {
  const dispatch = useDispatch()
  const {products, loading}  = useSelector(state=> state.getRelatedProduct);
  

  useEffect(()=>{
    dispatch(getRelatedProduct(id))
  }, [dispatch, id])

  if (loading) {
    return <div>Loading...</div>;
  }





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

  const handleWish=(e, id)=>{
    e.stopPropagation();
    e.preventDefault();
    dispatch(makeWish(id)).then((response)=>{
        if(response?.type === "makeWish/fulfilled"){
            dispatch(getProductList({offer: offer}))
            toast.success(response?.payload?.message)
        }
    })
}

const handleCart = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(makeCart({product: id, quantity: 1})).then((response)=>{
        if(response?.type === "makeCart/fulfilled"){
            dispatch(getProductList({offer: offer}))
            toast.success(response?.payload?.message)
        }
    })
};

  return (
    <div>
      <div className=" my-20">
        <div className="flex items-center justify-between  border-b-2  border-[#EDEDED]  ">
          <h1 className="border-b-[3px] border-[#7CC84E] text-xl md:text-2xl text-[#666666] font-semibold">
            {" "}
            Related Products{" "}
          </h1>
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
              {products?.map((product, index) => (
                <Link href={`/productDetails/${product?._id}`} key={index}>
                <div className="bg-gray-100 shadow-sm rounded  w-full pb-3 relative " >
                    <div className="relative w-full h-[220px] overflow-hidden rounded" >
                        <Image 
                            src={`${ImageConfig}${product?.productImage[0]}`} 
                            alt="offer image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    <div
                        className="
                            absolute  top-4 right-4
                            hover:opacity-80
                            transition
                            cursor-pointer
                        "
                        onClick={(e) => handleWish(e, product?._id)}
                    >
                        <AiOutlineHeart
                            size={28}
                            className="
                                fill-primary
                                absolute
                                -top-[2px]
                                -right-[2px]
                            "
                        />
                        <AiFillHeart
                            size={24}
                            className={
                                `${ product?.favorite ? "fill-primary " : "fill-neutral-500/70" }`
                            }
                        />
                    </div>

                    <div className="px-2 pb-5">
                        <div className="flex justify-between px-1 pt-3">
                            <p className="text-[555656] poppins font-medium text-[18px] leading-7 ">
                                {product?.productName}
                            </p>
                            <p className="text-[#929394] text-[16px] leading-6 font-thin poppins "> {product?.store} pc</p>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                            <p className="text-[18px] leading-5 font-semibold text-primary">
                                ${product?.discountPrice}
                                <span className="text-[12px] font-medium text-red-600 ps-2 line-through">${product?.price}</span>
                            </p>
                            <div 
                                onClick={(e)=>handleCart(e, product?._id)} 
                                className="text-primary cursor-pointer flex items-center justify-center w-10 h-10 bg-white rounded-lg"
                            >
                                <MdOutlineAddShoppingCart size={20} />
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
    </div>
  );
};

export default RelatedProduct;
