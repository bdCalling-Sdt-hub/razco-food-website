"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import profileImage from "@/assets/profile.png";
import { MdOutlineFeedback } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUser2, LuLogOut } from "react-icons/lu";
import { TbDatabaseDollar } from "react-icons/tb";
import { RiListUnordered } from "react-icons/ri";
import ProfileDetails from "./ProfileDetails";
import Settings from "./Settings";
import FeedBack from "./FeedBack";
import OrderHistory from "./OrderHistory";
import MyPoints from "./MyPoints";
import { UserContext } from "@/provider/User";
import { ImageConfig } from "@/Config";
import { updateProfile } from "@/redux/apiSlice/Profile/updateProfileSlice";
import { getProfile } from "@/redux/apiSlice/Profile/getProfileSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Profile = () => {
  const [tab, setTab] = useState("Profile Details");
  const [imgUrl, setimgUrl] = useState();
  const [image, setImage] = useState(null);
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const url = URL.createObjectURL(file);
    setimgUrl(url);
  };

  if(image){
    const formData = new FormData();
    formData.append("profileImage", image)
    dispatch(updateProfile(formData)).then((response)=>{
      if(response.type === "updateProfile/fulfilled"){
        setImage(null)
        toast.success(response?.payload?.message);
        dispatch(getProfile());
      }
    })
  }

  const handlePageChange = (tab) => {
    setTab(tab);
  };

  const items = [
    {
      name: "Profile Details",
      icons: <LuUser2 size={24} color="#555656" />,
    },
    {
      name: "Change Password",
      icons: <IoSettingsOutline size={24} color="#555656" />,
    },
    {
      name: "Feedback",
      icons: <MdOutlineFeedback size={24} color="#555656" />,
    },
    {
      name: "Order History",
      icons: <RiListUnordered size={24} color="#555656" />,
    },
    {
      name: "My Points",
      icons: <TbDatabaseDollar size={24} color="#555656" />,
    },
  ];

  const src = user?.profileImage?.startsWith("https") ?  user?.profileImage : `${ImageConfig}/${user?.profileImage}`;



  return (
    <div
      className="container mb-16 mt-10 grid grid-cols-12 lg:gap-10 lg:p-[50px] p-1 gap-[2px] rounded font-[poppins] "
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      }}
    >
      <aside className="col-span-12  md:col-span-4 lg:col-span-3 order-1 md:order-1">
        <div className="w-fit relative mb-3 mx-auto">
          <Image
            src={ imgUrl ? imgUrl : src}
            width={95}
            height={95}
            style={{ borderRadius: "100%" }}
            alt="Photo"
          />
          <input
            type="file"
            id="image"
            onChange={handleChange}
            style={{ display: "none" }}
          />
          <label
            htmlFor="image"
            className="absolute bottom-6 -right-2 cursor-pointer w-6 h-6 rounded-full bg-white flex items-center justify-center"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
            }}
          >
            <IoCameraOutline size={16} />
          </label>
        </div>

        <h1 className="text-secondary text-[16px] leading-6 font-semibold text-center">
        {user?.name}
        </h1>
        <p className="text-[#929394] text-[14px] leading-[18px] font-normal  text-center">
          {user?.email}
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3">
          {items.map((item, index) => {
            return (
              <p
                onClick={() => handlePageChange(item.name)}
                className={`
                  ${tab === item.name ? "bg-[#EFEEF6]" : null}
                  flex p-3 lg:p-[10px] hover:bg-[#EFEEF6] 
                  transition-all duration-300 cursor-pointer 
                  items-center gap-[10px]
                  rounded-lg  w-1/2  lg:w-full lg:ms-1 ms-5
                `}
                key={index}
              >
                {item.icons} {item.name}
              </p>
            );
          })}
        </div>
      </aside>

      <main className="col-span-12 md:col-span-8 lg:col-span-9  order-2 md:order-2">
        {tab === "Profile Details" && <ProfileDetails />}
        {tab === "Change Password" && <Settings />}
        {tab === "Feedback" && <FeedBack />}
        {tab === "Order History" && <OrderHistory />}
        {/* {tab === "Order Details" && <OrderHistory />} */}
        {tab === "My Points" && <MyPoints />}
      </main>
    </div>
  );
};

export default Profile;
