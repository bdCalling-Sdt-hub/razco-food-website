"use client";
import Image from "next/image";
import React, { useState } from "react";
import title from "@/assets/title.png";
import { IoClose, IoSearch, IoHeartOutline  } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import {
  AppstoreAddOutlined,
  DownOutlined
} from "@ant-design/icons";
import { Dropdown, Input, Space, Typography } from "antd";
import fruit from "@/assets/fruit1.png";
import fruit1 from "@/assets/fruit2.png";
import Link from "next/link";

const items = [
  {
    key: "1",
    label: (
      <div className=" flex gap-1  hover:bg-[#7CC84E] hover:text-white bg-white text-black  p-3 rounded text-sm items-center">
        <Image src={fruit} width={30} height={10} alt="" />
        <p> Fresh Fruits</p>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className=" flex gap-1  hover:bg-[#7CC84E] hover:text-white bg-white text-black  p-3 rounded text-sm items-center">
        <Image src={fruit1} width={30} height={10} alt="" />
        <p> Fresh Fruits</p>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className=" flex gap-1  hover:bg-[#7CC84E] hover:text-white bg-white text-black  p-3 rounded text-sm items-center">
        <Image src={fruit} width={30} height={10} alt="" />
        <p> Fresh Fruits</p>
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <div className=" flex gap-1  hover:bg-[#7CC84E] hover:text-white bg-white text-black  p-3 rounded text-sm items-center">
        <Image src={fruit1} width={30} height={10} alt="" />
        <p> Fresh Fruits</p>
      </div>
    ),
  },
];



const item = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Shop",
    path: "/shop"
  },
  {
    label: "About US",
    path: "/about"
  },
  {
    label: "Contact Us",
    path: "/contact"
  },
  {
    label: "Offer",
    path: "/offer"
  },
]



const Navbar = () => {
  const [keyword, setkeyword] = useState("")
  return (
    <div>

      {/* 1st navbar  */}
      <div className="container flex items-center  justify-between w-full py-2">
          <Image src={title} style={{height: 60}} width={160} alt="Photo" />
          <Input
            onChange={(e)=>setkeyword(e.target.value)}
            value={keyword}
            style={{
              width: 600,
              height: 42,
              border: "1px solid #C3C4C6",
              outline: "none",
              borderRadius: 8
            }}
            prefix={<IoSearch  size={20} color="#AAA6B9" />}
            suffix={<IoClose color="#AAA6B9" size={20} onClick={()=>setkeyword("")} className="cursor-pointer" style={{display:keyword ? "block" : "none" }} />}
            placeholder="Search something.."
          />

          <div className=" flex gap-3">
            <button className=" bg-[#F4F5F7] text-[#555656] w-[133px] py-2 rounded  ">Sign Up</button>
            <button className=" bg-[#7CC84E] text-white w-[133px] py-2 rounded ">Sign In</button>
          </div>
        </div>

      {/* 2nd navbar  */}
      <div className="w-full bg-[#EFEEF6]">
        <div className="container  flex items-center  justify-between ">
        {/* dropdown  */}
        <Dropdown
          className=" bg-[#7CC84E] py-3 px-9 rounded text-lg "
          menu={{
            items,
            selectable: true,
            style: {
              padding: "10px",
            },
          }}
        >
          <Typography.Link>
            <Space>
              <AppstoreAddOutlined />
              Browse All Categories
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>

        {/* menu  */}

        <div className="flex items-center gap-10">
          {
            item.map((menu, index) => {
              return(
                <Link key={index} className="font-normal text-[16px] leading-6 text-[#555656]" href={`${menu.path}`}>{menu.label}</Link>
              )
            } )
          }
        </div>

          {/* cart btn   */}
          <div className="flex items-center gap-6">
            <RiShoppingCartLine color="#555656" size={24}/>
            <IoHeartOutline color="#555656" size={24}/>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Navbar;
