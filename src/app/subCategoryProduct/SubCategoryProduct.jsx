"use client"
import React, { useEffect, useState } from "react";
import { Empty, Select } from "antd";
import Image from "next/image";
import { Pagination } from "antd";
import Link from "next/link";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { makeWish } from "@/redux/apiSlice/Wish/makeWishSlice";
import { makeCart } from "@/redux/apiSlice/Cart/makeCartSlice";
import toast from "react-hot-toast";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { getProductList } from "@/redux/apiSlice/Product/getProductListSlice";
import { ImageConfig } from "@/Config";



const Categories = ({name}) => {
    const dispatch = useDispatch()
    const { products, pagination } = useSelector(state=> state.getProducts);

    useEffect(()=>{
        dispatch(getProductList({subcategory: name}))
    }, [dispatch, name]);

    const handleWish=(e, id)=>{
        e.stopPropagation();
        e.preventDefault();
        dispatch(makeWish(id)).then((response)=>{
            if(response?.type === "makeWish/fulfilled"){
                dispatch(getProductList({subcategory: name}))
                toast.success(response?.payload?.message)
            }
        })
    }

    const handleCart = (e, id) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(makeCart({product: id, quantity: 1})).then((response)=>{
            if(response?.type === "makeCart/fulfilled"){
                dispatch(getProductList({subcategory: name}))
                toast.success(response?.payload?.message)
            }
        })
    };
    return (
        <div className="container mb-16 mt-10">
            <h1 className=" text-[#7CC84E] underline underline-offset-8 text-xl md:text-2xl font-semibold ">
                Sub Category Product
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-6  mt-12 font-[poppins]">
                    {
                        products?.map((product, index) => (
                            <Link href={`/productDetails/${product?._id}`} key={index}>
                                <div className="bg-gray-100 shadow-sm rounded  w-full p-2 relative " >
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
                                                ${product?.discountPrice ? product?.discountPrice: product?.price }
                                                <span style={{display: product?.discountPrice ? "block" : "none" }} className="text-[12px] font-medium text-red-600 ps-2 line-through">${ product?.price}</span>
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
                        ))
                    }
            </div>

            <div className="w-full h-full" style={{display: products?.length === 0 ? "block": "none"}}>
              <Empty />
            </div>
        
            <div style={{display: products?.length > 0 ? "block": "none"}} className="flex items-center sm:items-start justify-center md:justify-start mt-10 relative">
                <Pagination
                    total={pagination?.total}
                    showTotal={(total, range) => (
                        <span className="text-[#929394] hidden sm:block font-normal text-[16px] leading-[18px] absolute top-[24%] right-0">
                        {`Showing ${range[0]}-${range[1]} of ${total} items`}
                        </span>
                    )}
                />
            </div>
        </div>
    );
};

export default Categories;
