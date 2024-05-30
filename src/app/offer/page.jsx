"use client";
import React, { useState } from "react";
import {
  DownOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Image from "next/image";
import img2 from "@/assets/fruit1.png";
import img3 from "@/assets/fruit2.png";
import offer from "@/assets/offer.png";
import { Pagination, Select } from "antd";
const { Option } = Select;

const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return <a>Previous</a>;
  }
  if (type === "next") {
    return <a>Next</a>;
  }
  return originalElement;
};


const items = [
  {
    label: (
      <p className=" hover:bg-[#7CC84E] hover:text-white bg-white text-black  p-3 rounded text-sm">
        {" "}
        0$ - 100${" "}
      </p>
    ),
    key: "1",
  },
  {
    label: (
      <p className=" hover:bg-[#7CC84E] hover:text-white bg-white text-black  p-3 rounded text-sm">
        101$ - 250$
      </p>
    ),
    key: "2",
  },
  {
    label: (
      <p className=" hover:bg-[#7CC84E] hover:text-white bg-white text-black  p-3 rounded text-sm m-1">
        {" "}
        251$ - 400${" "}
      </p>
    ),
    key: "3",
  },
  {
    label: (
      <p className=" hover:bg-[#7CC84E] hover:text-white bg-white text-black  p-3 rounded text-sm">
        {" "}
        401$ -700${" "}
      </p>
    ),
    key: "3",
  },
  {
    label: (
      <p className=" hover:bg-[#7CC84E] hover:text-white bg-white text-black  p-3 rounded text-sm">
        {" "}
        701$ -1000$+
      </p>
    ),
    key: "3",
  },
];

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

const page = () => {
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
                color: "#555656"
              }}
            >
              <Option value="eid">Eid Offer</Option>
              <Option value="big">Big Sale</Option>
        </Select>
      </div>

      <div className=" mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 relative">
        {
          products.map((product) => (
            <div key={product.key} className=" mx-auto w-full lg:w-[300px] sm:w-full ">
              <div className="bg-gray-100 shadow-sm rounded w-full py-3 relative ">
                <p className="px-3"> {product.imgURL}</p>

                <p className=" bg-red-600 text-white  ps-4 rounded text-lg w-1/3 absolute left-2 top-2">
                  10% off
                </p>
                <p className=" text-[#7CC84E] absolute right-5 top-4 text-2xl">
                  {" "}
                  <HeartOutlined />{" "}
                </p>
                <div className="px-5 pb-5">
                  <div className="flex justify-between px-1 pt-3">
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

                    <p className="text-[#7CC84E] bg-white  font-semibold rounded-lg text-2xl px-4 py-2 text-center">
                      <ShoppingCartOutlined />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
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
