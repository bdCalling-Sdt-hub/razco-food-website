"use client"
import React, { useEffect } from "react";
import { getAboutUs } from "@/redux/apiSlice/getAboutSlice"
import { useDispatch, useSelector } from "react-redux";

const AboutClient = () => {
    const dispatch = useDispatch()
    const { about } = useSelector(state=> state.getAbout);

    useEffect(()=>{
        dispatch(getAboutUs())
    }, [dispatch])

    return (
        <div className="container mb-16 mt-10">
            <h1 className=" text-xl font-semibold text-[#575757] pb-5">About Us</h1>
            
            <div dangerouslySetInnerHTML={{ __html: about?.content }}></div>

        </div>
    );
};

export default AboutClient;
