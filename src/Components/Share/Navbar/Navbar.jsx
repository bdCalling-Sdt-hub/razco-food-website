"use client";
import Image from "next/image";
import React from "react";
import title from "@/assets/title.png";
import {
  AppstoreAddOutlined,
  DownOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
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

const menus = [
  {
    key: "1",
    label: (
      <div className="  text-[#555656] sm:text-sm text-lg">
        <Link href="/">
          <p> Home </p>{" "}
        </Link>
      </div>
    ),
  },

  {
    key: "2",
    label: (
      <div className="  text-[#555656] sm:text-sm text-lg">
        <Link href="/shop">
          <p> Shop </p>{" "}
        </Link>
      </div>
    ),
  },

  {
    key: "3",
    label: (
      <div className="  text-[#555656] sm:text-sm text-lg">
        <Link href="/about">
          <p> About Us</p>{" "}
        </Link>
      </div>
    ),
  },

  {
    key: "4",
    label: (
      <div className="  text-[#555656] sm:text-sm text-lg">
        <Link href="/contact">
          <p> Contact Us</p>{" "}
        </Link>
      </div>
    ),
  },

  {
    key: "5",
    label: (
      <div className="  text-[#555656] sm:text-sm text-lg">
        <Link href="/offer">
          <p> Offer</p>{" "}
        </Link>
      </div>
    ),
  },
];
const Navbar = () => {
  return (
    <div className=" lg:mt-6 mt-3 mx-auto">
      {/* 1st navbar  */}
      <div className="lg:ms-[270px] lg:me-[270px] mx-auto">
        <div className=" lg:flex lg:items-center  justify-between w-full gap-10 ">
          <Image src={title} height={8} width={160} alt="Photo" />
          <div className=" w-full mx-auto ms-10">
            <div className="relative flex items-center  w-full h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border-2 border-gray-400">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <p>
                  <SearchOutlined />
                </p>
              </div>

              <input
                className="peer h-full lg:w-[600px] w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.."
              />
            </div>
          </div>

          <div className=" flex gap-3 w-full">
            <button className=" bg-[#F4F5F7] text-[#555656] w-1/2 p-2 rounded  ">
              Sign Up
            </button>
            <button className=" bg-[#7CC84E] text-white w-1/2 p-2 rounded ">
              {" "}
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* 2nd navbar  */}
      <div className="lg:ps-[270px] lg:pe-[270px]  lg:flex lg:items-center  justify-between bg-[#EFEEF6]">
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

        <div className=" lg:flex lg:gap-14">
          {menus.map((manu) => (
            <div key={manu.key}> {manu.label} </div>
          ))}
        </div>

        {/* cart btn   */}
        <div className="flex gap-3 ">
          <button className="text-3xl ">
            <Link href="/addCart">
              <ShoppingCartOutlined />{" "}
            </Link>
          </button>

          <button className="text-3xl">
            <Link href="/favorite">
              {" "}
              <HeartOutlined />{" "}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
