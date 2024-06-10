"use client"

import Summary from "@/Components/AddCart/Summary";
import React, { useEffect, useState } from "react";
import { getCart } from "@/redux/apiSlice/getCartSlice"
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { LuTrash2 } from "react-icons/lu";
import Image from "next/image";
import { ImageConfig } from "@/Config";
import { makeCart } from "@/redux/apiSlice/Cart/makeCartSlice";
import { removeCart } from "@/redux/apiSlice/Cart/removeCartSlice";
import { Empty } from "antd";

const CartClient = () => {
    const dispatch = useDispatch()
    const { carts } = useSelector(state=> state.getCart);
    useEffect(()=>{
        dispatch(getCart())
    }, [dispatch]);


    const handleIncrease=(id, quantity)=>{
        dispatch(makeCart({product: id, quantity: quantity + 1})).then((_res)=>{
            dispatch(getCart())
        })
    }

    const handleDecrease=(id, quantity)=>{
        dispatch(makeCart({product: id, quantity: quantity - 1})).then((_res)=>{
            dispatch(getCart())
        })
    }

    const total = carts?.reduce((accumulator, currentItem) => {
        const price = currentItem?.product?.discountPrice ? currentItem?.product?.discountPrice  : currentItem?.product?.price
        const result = currentItem?.quantity * price;
        return accumulator + result;
    }, 0);

    const handleDelete=(id)=>{
        dispatch(removeCart(id)).then((_res)=>{
            dispatch(getCart())
        })
    }


    return (
        <div className="container mb-5 mt-5">
            <div  className={` ${carts?.length > 0 ? "grid" : "hidden" } grid-cols-12 gap-6 lg:gap-10`}>

                <div className="col-span-12 md:col-span-6 order-2 lg:order-1">
                {
                    carts?.map((product, index) =>{
                        return(
                            <div
                                key={index}
                                className=" flex items-center gap-10 p-3 bg-[#F8F8FC] mb-4 rounded"
                            >
                                <div className="relative w-24 h-20 overflow-hidden rounded" >
                                    <Image 
                                        src={`${ImageConfig}/${product?.product?.productImage[0]}`} 
                                        alt="offer image"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>

                                <div className="w-full flex items-center justify-between">

                                    <div>
                                        <h3 className="text-[#555656] text-xl font-medium">{product?.product?.productName}</h3>
                                        <p className=" text-sm text-[#929394] my-2 m-0 p-0"> {product?.product?.weight}</p>

                                        <div className="flex items-center gap-3">
                                            <button
                                                disabled={product?.quantity === 1} 
                                                onClick={()=>handleDecrease(product?.product?._id, product?.quantity)}
                                                className=" w-8 h-8 flex items-center justify-center  bg-[#e4e6e9] rounded  text-center"
                                            >
                                                <FaMinus size={18} color="#6E6E6F" />
                                            </button>

                                            <button
                                                className=" w-8 h-8  flex items-center justify-center bg-[#e4e6e9] rounded  text-center"
                                            >
                                                {product?.quantity}
                                            </button>

                                            <button 
                                                onClick={()=>handleIncrease(product?.product?._id, product?.quantity)}
                                                className=" w-8 h-8  flex items-center justify-center bg-[#e4e6e9] rounded  text-center"
                                            >
                                                <FaPlus size={18} color="#6E6E6F" />
                                            </button>
                                        </div>
                                    </div>

                                    <p className=" text-[#70B446] text-2xl font-semibold">${product?.product?.discountPrice ? product?.product?.discountPrice: product?.product?.price}</p>
                                    <LuTrash2  onClick={()=>handleDelete(product?.product?._id)} className="cursor-pointer" size={24} color="#C11415" />
                                </div>
                            </div>
                        )
                    } )
                }
                </div>

                <div className="col-span-12 md:col-span-6 order-1 lg:order-1">
                    <Summary id={carts._id} carts={carts} total={total} />
                </div>

            </div>

            
            <div className="relative w-full h-[50vh]"  style={{display: carts?.length === 0 ? "block" : "none"}}>
                <div className="w-fit absolute top-[40%] left-[40%]">
                    <Empty/>
                </div>
            </div>
        </div>
    );
};

export default CartClient;
