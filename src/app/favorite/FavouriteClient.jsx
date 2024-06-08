"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { getWish } from "@/redux/apiSlice/getWishSlice"
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { makeWish } from "@/redux/apiSlice/Wish/makeWishSlice";
import { makeCart } from "@/redux/apiSlice/Cart/makeCartSlice";
import toast from "react-hot-toast";
import { ImageConfig } from "@/Config";
import { Empty } from "antd";


const FavouriteClient = () => {
    const dispatch = useDispatch()
    const { wish } = useSelector(state=> state.getWish);
    console.log(wish)

    useEffect(()=>{
        dispatch(getWish())
    }, [dispatch]);


    const handleWish=(e, id)=>{
        e.stopPropagation();
        e.preventDefault();
        dispatch(makeWish(id)).then((response)=>{
            if(response?.type === "makeWish/fulfilled"){
                dispatch(getWish())
                toast.success(response?.payload?.message)
            }
        })
    }

    const handleCart = (e, id) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(makeCart({product: id, quantity: 1})).then((response)=>{
            if(response?.type === "makeCart/fulfilled"){
                dispatch(getWish())
                toast.success(response?.payload?.message)
            }
        })
    };
    
    return (
        <div className="container mb-16 mt-10 relative">
            <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6 relative">
                {
                    wish?.map((item, index) =>{
                        return(
                            <Link href="/productDetails" key={index}>
                                <div className="bg-gray-100 shadow-sm rounded  w-full pb-3 relative ">
                                    <div className="relative w-full h-[220px] overflow-hidden rounded" >
                                        <Image 
                                            src={`${ImageConfig}/${item?.product?.productImage[0]}`} 
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
                                        onClick={(e) => handleWish(e, item?.product?._id)}
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
                                            className={"fill-primary"}
                                        />
                                    </div>
        
                                    <div className="px-2 pb-5">
                                        <div className="flex justify-between px-1 pt-3">
                                            <p className="text-[555656] poppins font-medium text-[18px] leading-7 ">
                                                {item?.product?.productName}
                                            </p>
                                            <p className="text-[#929394] text-[16px] leading-6 font-thin poppins "> {item?.product?.store} pc</p>
                                        </div>
        
                                        <div className="flex items-center justify-between mt-3">
                                            <p className="text-[18px] leading-5 font-semibold text-primary">
                                                ${item?.product?.discountPrice}
                                                <span className="text-[12px] font-medium text-red-600 ps-2 line-through">${item?.product?.price}</span>
                                            </p>
                                            <div 
                                                onClick={(e)=>handleCart(e, item?.product?._id)} 
                                                className="text-primary cursor-pointer flex items-center justify-center w-10 h-10 bg-white rounded-lg"
                                            >
                                                <MdOutlineAddShoppingCart size={20} />
                                            </div>
                                        </div>
        
                                    </div>
        
                                </div>
                            </Link>
                        )
                    })
                }
            </div>

            <div  style={{display: wish?.length === 0 ? "block" : "none"}}>
                <Empty/>
            </div>

        </div>
    );
};

export default FavouriteClient;
