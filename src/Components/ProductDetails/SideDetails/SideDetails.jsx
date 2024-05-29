import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

const SideDetails = () => {
  return (
    <div className=" ">
      <h1 className=" text-3xl font-semibold  text-[#555656] pb-6 ">
        {" "}
        Red Tomato
      </h1>

      <p className="font-medium text-[#70B446] text-2xl ps-0 ">
        $12 <sub className="text-[#929394]">/500gm</sub>
      </p>

      <div className=" flex gap-3 lg:gap-8 lg:mt-8 mt-4 lg:mb-9 mb-4  ">
        <button className=" w-12 h-12  bg-[#e4e6e9] rounded  text-center">
          {" "}
          <MinusOutlined />{" "}
        </button>

        <button className=" w-12 h-12  bg-[#e4e6e9] rounded  text-center">
          {" "}
          1{" "}
        </button>

        <button className=" w-12 h-12  bg-[#e4e6e9] rounded  text-center">
          {" "}
          <PlusOutlined />{" "}
        </button>
      </div>

      <div className="w-full">
        <Link href="/addCart">
          <button className=" w-full text-[#70B446] border border-[#70B446] p-2 mb-6 rounded font-medium">
            Add to Cart{" "}
          </button>
        </Link>

        <br />
        <button className=" bg-[#7CC84E] text-white w-full  p-2 rounded ">
          {" "}
          Buy Now
        </button>
      </div>
      <p className=" font-medium text-xl text-[#555656] mt-8">
        {" "}
        Products Details{" "}
      </p>
      <p className="text-[#929394] text-sm leading-loose pt-2">
        {" "}
        Every 500 gm of product will contain 10-12 pcs of Strawberry..
        Strawberries are delicious, vibrant red fruits known for their sweet
        flavor and juicy texture. They belong to the genus Fragaria and are
        widely <span className=" text-[#5B52A3]"> more... </span>
      </p>
    </div>
  );
};

export default SideDetails;
