"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import title from "@/assets/title.png";
import { IoClose, IoSearch, IoHeartOutline  } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { Drawer, Input, Select } from "antd";
import Link from "next/link";
import useLoginModal from "@/hooks/useLoginModal";
const { Option } = Select;
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Drawers from "../Drawers";
import { MdKeyboardArrowRight } from "react-icons/md";
import { UserContext } from "@/provider/User";
import { ImageConfig } from "@/Config";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import {  getCategory } from "@/redux/apiSlice/Category/getCategorySlice";



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
  const {user, setUser} = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch()
  const {categories} = useSelector(state=> state.getCategory);

  const handleLogOut=()=>{
    localStorage.removeItem("token");
    setUser(null)
    window.location.reload()

  }

  useEffect(()=>{
    dispatch(getCategory())
  }, [dispatch])

  const src = user?.profileImage?.startsWith("https") ?  user?.profileImage : `${ImageConfig}/${user?.profileImage}`;
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

            <div className=" flex gap-3">
              {
                user?._id 
                ?
                <button onClick={handleLogOut} className=" bg-secondary text-white w-[133px] py-2 rounded ">Logout</button>
                :
                <button onClick={loginModal.onOpen} className=" bg-[#7CC84E] text-white w-[133px] py-2 rounded ">Sign In</button>
              }
              
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
                  onChange={(e)=>router.push(`/subCategory/${e}`)}
                >
                  {
                    categories?.map((option) => (
                      <Option value={option?._id} key={option.value}>
                        {option?.categoryName}
                        
                        <MdKeyboardArrowRight color="#6E6E6F" className="block absolute top-[21%] right-0" size={20} />
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
            <RiShoppingCartLine 
              onClick={()=>{
                if(!user?.email){
                  loginModal.onOpen()
                }else{
                  router.push('/addCart'); 
                }
              }}  
              className="cursor-pointer" 
              color="#555656" 
              size={24}
            />

            <IoHeartOutline 
              onClick={()=>{
                if(!user?.email){
                  loginModal.onOpen()
                }else{
                  router.push('/favorite'); 
                }
              }} 
              className="cursor-pointer" color="#555656" size={24}
            />
            <div>
              {
                user?._id 
                &&
                <Link href={"/profile"}>
                  <Image src={src} width={26} height={26} alt="" />
                </Link>
              }
          </div>

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