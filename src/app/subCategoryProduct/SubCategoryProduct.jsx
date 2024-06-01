"use client"
import React, { useState } from "react";
import {
  DownOutlined,
  HeartFilled,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Dropdown, Select, Space } from "antd";
import Image from "next/image";
import img2 from "@/assets/fruit1.png";
import img3 from "@/assets/fruit2.png";
import { Pagination } from "antd";
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

const Categories = () => {
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
    <div className="container mb-16 mt-10">
      <h1 className=" text-[#7CC84E] underline underline-offset-8 text-xl md:text-2xl font-semibold ">
        Sub Category Product
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-6  mt-12 font-[poppins]">
                {
                    products.map((product) => (
                        <Link href="./productDetails" key={product.key}>
                            <div className=" mx-auto relative ">
                                <div className="bg-gray-100 shadow-sm rounded  w-full py-3 relative ">
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
                                    <div className="flex justify-between px-1 pt-3 items-center relative">
                                        <h3 className="text-[555656] font-medium text-xl tracking-tight ">
                                        {product.title}
                                        </h3>
                                        <p className="text-[#929394] text-sm "> 1 pc</p>
                                    </div>
                    
                                    <div className="flex items-center justify-between mt-3">
                                        <p className="text-xl font-semibold text-[#7CC84E]">
                                        $5
                                        <span className="text-sm font-medium text-red-600 ps-2 line-through">
                                            $7
                                        </span>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                
                                <span onClick={handleCart} className="text-[#7CC84E] bg-white font-semibold rounded-lg text-2xl px-4 py-2 text-center absolute right-3 bottom-5">
                                    <ShoppingCartOutlined  />
                                </span>
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

export default Categories;
