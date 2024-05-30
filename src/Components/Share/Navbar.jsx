"use client";
import Image from "next/image";
import React, { useState } from "react";
import title from "@/assets/title.png";
import { IoClose, IoSearch, IoHeartOutline  } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { Input, Select } from "antd";
import Link from "next/link";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
const { Option } = Select;



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
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const user = false;
  return (
    <div>

      {/* 1st navbar  */}
      <div className="container flex items-center  justify-between w-full py-2">
          <Link href={`/`}>
            <Image src={title} style={{height: 60}} width={160} alt="Photo" />
          </Link>
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
            <button onClick={registerModal.onOpen} className=" bg-[#F4F5F7] text-[#555656] w-[133px] py-2 rounded  ">Sign Up</button>
            <button onClick={loginModal.onOpen} className=" bg-[#7CC84E] text-white w-[133px] py-2 rounded ">Sign In</button>
          </div>
        </div>

      {/* 2nd navbar  */}
      <div className="w-full bg-[#EFEEF6]">
        <div className="container  flex items-center  justify-between ">
          <div className="bg-primary w-[321px] rounded-lg navbar">
            <Select
                  placeholder="Select Category"
                  style={{
                    background: "#7CC84E",
                    width: "100%",
                    height: 48,
                    outline: "none",
                    borderRadius: "5px",
                    color: "white"
                  }}
                >
                  <Option value="200">Fresh Fruits</Option>
                  <Option value="100">Organic</Option>
                  <Option value="300">Fish</Option>
                  <Option value="400">Meat</Option>
            </Select>
          </div>

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
            <Link  href={`/addCart`} >
              <RiShoppingCartLine  className="cursor-pointer" color="#555656" size={24}/>
            </Link>

            <IoHeartOutline 
              onClick={()=>{
                if(!user){
                  loginModal.onOpen()
                }else{
                  window.location.replace("/favorite")
                }

              }} 
              className="cursor-pointer" color="#555656" size={24}
            />

          </div>
        </div>


      </div>
    </div>
  );
};

export default Navbar;
