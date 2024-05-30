"use client";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import img2 from "@/assets/fruit1.png";
import img3 from "@/assets/fruit2.png";
import { Pagination } from "antd";
import Link from "next/link";

const products = [...Array(8).keys()].map((index) => ({
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

const page = () => {
  return (
    <div className="container mb-16 mt-10 relative">
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 relative">
        {products.map((product) => (
          <Link href="./productDetails" key={product.key}>
            {" "}
            <div className=" mx-auto">
              <div className="bg-gray-100 shadow-sm rounded w-full py-3 relative ">
                <p className="px-3"> {product.imgURL}</p>
                <p className=" text-[#7CC84E] absolute right-5 top-4 text-2xl">
                  {" "}
                  <FaHeart />{" "}
                </p>
                <div className="px-5 pb-5">
                  <div className="flex justify-between px-1 pt-3">
                    <h3 className="text-[555656] font-medium text-[16px] md:text-xl tracking-tight ">
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

                    <p className="text-[#7CC84E] bg-white  font-semibold rounded-lg text-2xl px-4 py-2 text-center">
                      <ShoppingCartOutlined />
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </Link>
        ))}
      </div>

      <div className="flex items-center sm:items-start justify-center md:justify-start mt-10 relative">
        <Pagination 
          total={50}
          showTotal={(total, range) => 
            <span className="text-[#929394] hidden sm:block font-normal text-[16px] leading-[18px] absolute top-[24%] right-0">
                {`Showing ${range[0]}-${range[1]} of ${total} items`}
            </span>
          }
        />
      </div>
    </div>
  );
};

export default page;
