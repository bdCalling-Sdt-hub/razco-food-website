"use client";
import Image from "next/image";
import React, { useState } from "react";
import title from "@/assets/title.png";
import { IoClose, IoSearch, IoHeartOutline  } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { Drawer, Dropdown, Input, Menu, Select } from "antd";
import Link from "next/link";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
const { Option } = Select;
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Drawers from "../Drawers";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";



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

const options = [
  {
    value: '200',
    label: 'Fresh Fruits',
    children: [
      {
        value: '201',
        label: 'Apples',
      },
      {
        value: '202',
        label: 'Bananas',
      },
    ],
  },
  {
    value: '100',
    label: 'Organic',
    children: [
      {
        value: '301',
        label: 'Salmon',
      },
      {
        value: '302',
        label: 'Tuna',
      },
    ],
  },
  {
    value: '300',
    label: 'Fish',
    children: [
      {
        value: '301',
        label: 'Salmon',
      },
      {
        value: '302',
        label: 'Tuna',
      },
    ],
  },
  {
    value: '400',
    label: 'Meat',
    children: [
      {
        value: '301',
        label: 'Salmon',
      },
      {
        value: '302',
        label: 'Tuna',
      },
    ],
  },
];

const Navbar = () => {
  const [keyword, setkeyword] = useState("")
  const loginModal = useLoginModal();
  const user = true;
  const [open, setOpen] = useState(false)
  return (
    <div>

      {/* 1st navbar  */}
      <div className="container py-2 poppins">
          <Link href={`/`} className=" md:hidden flex items-center justify-center mb-6">
              <Image src={title} style={{height: 60}} width={160} alt="Photo" />
            </Link>
          <div className="flex items-center gap-8 lg:gap-0  justify-between w-full mb-2 md:mb-2">
            <Link href={`/`} className="hidden md:block">
              <Image src={title} width={160} height={80} alt="Photo" />
            </Link>
            <Input
              onChange={(e)=>setkeyword(e.target.value)}
              value={keyword}
              style={{
                maxWidth: 600,
                height: 42,
                border: "1px solid #C3C4C6",
                outline: "none",
                borderRadius: 8
              }}
              // className="w-full md:w-[600px]"
              prefix={<IoSearch  size={20} color="#AAA6B9" />}
              suffix={<IoClose color="#AAA6B9" size={20} onClick={()=>setkeyword("")} className="cursor-pointer" style={{display:keyword ? "block" : "none" }} />}
              placeholder="Search something.."
            />

            <div className=" flex items-center gap-3">
              <button onClick={loginModal.onOpen} className=" bg-[#7CC84E] text-white w-[133px] py-2 rounded ">Sign In</button>
              <Link href={"/profile"}>
                <FaRegCircleUser size={26} />
              </Link>
            </div>
          </div>
        </div>

      {/* 2nd navbar  */}
      <div className="w-full bg-[#EFEEF6]">
        <div className="container  flex items-center  justify-between ">
          <div className="bg-primary w-[180px] md:w-[321px] rounded-lg navbar">
            <Select
                  placeholder={<p className="poppins flex items-center justify-between">Select Category <MdKeyboardArrowRight color="white"  size={20} /></p>}
                  style={{
                    background: "#7CC84E",
                    width: "100%",
                    height: 48,
                    outline: "none",
                    borderRadius: "5px",
                    color: "white",
                  }}
                  className="poppins custom-select"
                >
                  {
                    options.map((option) => (
                      <Option value={option.value} key={option.value}>
                        {option.label}
                        {option.children && (
                          <Dropdown
                            overlayStyle={{
                              marginLeft: 60
                            }}
                            overlay={
                              <Menu>
                                {option.children.map((child) => (
                                  <Menu.Item key={child.value}>{child.label}</Menu.Item>
                                ))}
                              </Menu>
                            }
                            trigger={['hover']}
                          >
                            <MdKeyboardArrowRight color="#6E6E6F" className="block absolute top-[21%] right-0" size={20} />
                          </Dropdown>
                        )}
                      </Option>
                    ))
                  }

            </Select>
          </div>

        {/* menu  */}

        <div className="hidden  lg:flex items-center gap-10">
          {
            item.map((menu, index) => {
              return(
                <Link key={index} className="font-normal poppins text-[16px] leading-6 text-[#555656]" href={`${menu.path}`}>{menu.label}</Link>
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

            <div className="lg:hidden">
              <HiOutlineMenuAlt1 onClick={()=>setOpen(true)}  className="cursor-pointer" color="#555656" size={24}/>
            </div>

          </div>
        </div>


      </div>



      <Drawer
        title={false}
        placement={"left"}
        closable={false}
        onClose={()=>setOpen(false)}
        open={open}
        size={350}
        key={"left"}
      >
        <div>
          <Drawers/>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;