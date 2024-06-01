"use client";
import React, { useState } from "react";
import {
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import img2 from "@/assets/fruit1.png";
import img3 from "@/assets/fruit2.png";
import { Pagination, Select } from "antd";
import Link from "next/link";
const { Option } = Select;
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";





const products = [...Array(16).keys()].map((index) => ({
    key: `${index + 1}`,
    imgURL: (
        <Image
        src={index % 2 === 0 ? img2 : img3} // Alternating between img2 and img3
        width={300}
        height={40}
        alt=" "
        className="mx-auto bg-gray-200 rounded"
        />
    ),
    title: "Dairy & Breakfast", // You can adjust the title as needed
}));

const OfferClient = () => {
    const [hasFavorited, setHasFavorited] = useState(Array(16).fill(false));
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
        <div className=" container mt-10 mb-20 ">
            <div className="flex items-end justify-end">
                <Select
                placeholder="Browse Offer"
                style={{
                    background: "transparent",
                    width: 150,
                    height: 48,
                    outline: "none",
                    borderRadius: "5px",
                    color: "#555656",
                }}
                >
                <Option value="eid">Eid Offer</Option>
                <Option value="big">Big Sale</Option>
                </Select>
            </div>

            <div className=" mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 relative font-[poppins]">
                {
                    products.map((product) => (
                        <Link href={"/productDetails"} key={product.key}>
                            <div
                                className=" mx-auto w-full lg:w-[300px] sm:w-full "
                            >
                                <div className="bg-gray-100 shadow-sm rounded w-full py-3 relative ">
                                    <p className="px-3"> {product.imgURL}</p>

                                    <p className=" bg-red-600 text-white  ps-4 rounded text-lg w-1/3 absolute left-2 top-2">
                                        10% off
                                    </p>



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
                                        <div className="flex justify-between px-1 pt-3 items-center">
                                            <h3 className="text-[555656] font-medium text-xl tracking-tight ">
                                                {product.title}
                                            </h3>
                                            <p className="text-[#929394] text-sm "> 1 pc</p>
                                        </div>

                                        <div className="flex items-center justify-between mt-3">
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
                    ))
                }
            </div>

            <div className="flex items-center sm:items-start justify-center md:justify-start mt-10 relative">
                <Pagination
                total={50}
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

export default OfferClient;
