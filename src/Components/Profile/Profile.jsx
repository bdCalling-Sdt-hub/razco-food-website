"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { IoCameraOutline } from 'react-icons/io5'
import profileImage from "@/assets/profile.png";
import { MdOutlineFeedback } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUser2, LuLogOut } from "react-icons/lu";
import { TbDatabaseDollar } from "react-icons/tb";
import { RiListUnordered } from "react-icons/ri";
import ProfileDetails from './ProfileDetails';
import Settings from './Settings';
import FeedBack from './FeedBack';
import OrderHistory from './OrderHistory';
import MyPoints from './MyPoints';

const Profile = () => {
    const [tab, setTab] = useState(new URLSearchParams(window.location.search).get('tab') || "Profile Details");
    const [imgUrl, setimgUrl] = useState();
    const [image, setImage] = useState();

    const handleChange=(e)=>{
        const file = e.target.files[0];
        setImage(file);
        const url = URL.createObjectURL(file);
        setimgUrl(url)
    }

    const handlePageChange = (tab) => {
        setTab(tab);
        const params = new URLSearchParams(window.location.search);
        params.set('tab', tab);
        window.history.pushState(null, "", `?${params.toString()}`);
    };

    const handleLogout=()=>{
        window.location.replace("/")
    }


    const items = [
        {
            name: "Profile Details",
            icons: <LuUser2 size={24} color='#555656'/>
        },
        {
            name: "Settings",
            icons: <IoSettingsOutline size={24} color='#555656'/>
        },
        {
            name: "Feedback",
            icons: <MdOutlineFeedback size={24} color='#555656'/>
        },
        {
            name: "Order History",
            icons: <RiListUnordered size={24} color='#555656'/>
        },
        {
            name: "My Points",
            icons: <TbDatabaseDollar size={24} color='#555656'/>
        }
    ]
    return (
        <div 
            className='container mb-16 mt-10 grid grid-cols-12 gap-10 p-[50px] rounded ' 
            style={{
                boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                height: "calc(100vh - 228px)"
            }}
        >
            <aside className='col-span-3'>
                <div className='w-fit relative mb-3 mx-auto'>
                    <Image src={ imgUrl ? imgUrl : profileImage} width={95} height={95} style={{borderRadius: "100%"}} alt="Photo" />
                    <input type="file" id='image' onChange={handleChange} style={{display: "none"}} />
                    <label
                        htmlFor='image' 
                        className='absolute bottom-6 -right-2 cursor-pointer w-6 h-6 rounded-full bg-white flex items-center justify-center'
                        style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"}}
                    >
                        <IoCameraOutline size={16} />
                    </label>
                </div>

                <h1 className='text-secondary text-[16px] leading-6 font-semibold text-center'>Cameron Williamson</h1>
                <p className='text-[#929394] text-[14px] leading-[18px] font-normal  text-center'>deanna.curtis@example.com</p>

                <div className='mt-5 grid grid-cols-1 gap-3'>
                    {
                        items.map((item, index) => {
                            return (
                                <p 
                                    onClick={()=>handlePageChange(item.name)}
                                    className={`
                                        ${tab === item.name ? "bg-[#EFEEF6]" : null}
                                        flex p-[10px] hover:bg-[#EFEEF6] 
                                        transition-all duration-300 cursor-pointer 
                                        items-center gap-[10px]
                                        rounded-lg
                                    `}
                                    key={index}
                                >
                                    {item.icons} {item.name}
                                </p>
                            )
                        })
                    }

                    <p 
                        onClick={handleLogout}
                        className='flex p-[10px] mt-10 hover:bg-[#EFEEF6] transition-all duration-300 cursor-pointer items-center gap-[10px]'
                    >
                        <LuLogOut size={24} color='#555656' /> Log out
                    </p>
                </div>
            </aside>

            <main className='col-span-9 '>
                {tab === "Profile Details" && <ProfileDetails/>}
                {tab === "Settings" && <Settings/>}
                {tab === "Feedback" && <FeedBack/>}
                {tab === "Order History" && <OrderHistory/>}
                {tab === "My Points" && <MyPoints/>}
            </main>
        </div>
    )
}

export default Profile;