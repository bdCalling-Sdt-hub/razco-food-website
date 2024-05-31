import { LuMinus, LuPlus } from "react-icons/lu";
import Link from "next/link";
import React from "react";

const SideDetails = () => {
  return (
    <div className=" ">
      <h1 className=" text-3xl font-semibold  poppins text-secondary pb-6 ">Red Tomato</h1>

      <p className="font-medium text-primary text-[40px] leading-[60px]">
        $12 <sub className="text-[#929394] font-normal text-[24px] leading-[36px]">500gm</sub>
      </p>

      <div className=" flex items-center gap-4 lg:mt-8 mt-4 lg:mb-9 mb-4  ">
        <button className=" w-12 h-12 flex items-center justify-center bg-[#EFEEF6] rounded  text-center"><LuMinus color="#6E6E6F" /></button>
        <button disabled className=" w-12 h-12 flex items-center justify-center  bg-[#EFEEF6] rounded  text-center text-[#6E6E6F]">1</button>
        <button className=" w-12 h-12  bg-[#EFEEF6] flex items-center justify-center rounded  text-center"><LuPlus color="#6E6E6F"  /></button>
      </div>

      <div className="w-full">
        <Link href="/addCart">
          <button className="poppins w-full text-[#70B446] border border-[#70B446] p-2 mb-6 rounded font-medium">
            Add to Cart
          </button>
        </Link>

        <br />
        <button className="poppins bg-[#7CC84E] text-white w-full  p-2 rounded ">
          Buy Now
        </button>
      </div>
      <p className=" font-medium text-xl text-[#555656] mt-8 poppins">
        Products Details
      </p>
      <p className="text-[#929394] text-sm leading-loose pt-2 poppins">
        Every 500 gm of product will contain 10-12 pcs of Strawberry..
        Strawberries are delicious, vibrant red fruits known for their sweet
        flavor and juicy texture. They belong to the genus Fragaria and are
        widely <span className=" text-[#5B52A3]"> more... </span>
      </p>
    </div>
  );
};

export default SideDetails;
