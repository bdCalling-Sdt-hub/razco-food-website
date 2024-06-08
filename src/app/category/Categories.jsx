"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { getCategory } from "@/redux/apiSlice/Category/getCategorySlice";
import { useDispatch, useSelector } from "react-redux";
import { ImageConfig } from "@/Config";

const Categories = () => {
  const dispatch = useDispatch()
  const {categories} = useSelector(state=> state.getCategory);

  useEffect(()=>{
    dispatch(getCategory())
  }, [dispatch])


  return (
    <div className="container my-20 ">
      <h1 className=" text-[#7CC84E] underline underline-offset-8 text-xl md:text-2xl font-semibold ">Category</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7  gap-6  mt-12 font-[poppins]">
        {categories?.map((product, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Categories;
