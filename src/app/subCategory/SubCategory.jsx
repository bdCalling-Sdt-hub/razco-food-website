"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { getSubCategoryById } from "@/redux/apiSlice/Category/getSubCategoryByIdSlice";
import { ImageConfig } from "@/Config";
import { Empty } from "antd";



const Categories = ({id}) => {
  const dispatch = useDispatch()
  const {datas} = useSelector(state=> state.getSubCategoryPerCategory);

  useEffect(()=>{
    dispatch(getSubCategoryById(id))
  }, [dispatch, id])

    return (
        <div className="container my-20 ">
            <h1 className=" text-[#7CC84E] underline underline-offset-8 text-xl md:text-2xl font-semibold ">
                Sub Category
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7  gap-6  mt-12 font-[poppins]">
                {datas?.map((product, index) => (
                  <Link key={index} href={`/subCategoryProduct/${product?.subcategoryName}`}>
                  <div className=" mx-auto">
                    <div className="relative w-[100px] h-[100px] overflow-hidden rounded mx-auto" >
                        <Image 
                            src={`${ImageConfig}${product?.subcategoryImage}`} 
                            alt="offer image"
                            layout="fill"
                            objectFit="cover"
                        />
                        
                      </div>
                    <h4 className="poppins text-center text-lg  mt-2 ">{product?.subcategoryName}</h4>
                  </div>
                </Link>
                ))}
            </div>

            <div className="w-full h-full" style={{display: datas?.length === 0 ? "block": "none"}}>
              <Empty />
            </div>
        </div>
    );
};

export default Categories;
