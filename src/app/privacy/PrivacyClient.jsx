"use client"
import React, { useEffect } from 'react'
import { getPrivacyPolicy } from "@/redux/apiSlice/getPrivacySlice"
import { useDispatch, useSelector } from "react-redux";

const PrivacyClient = () => {
    const dispatch = useDispatch()
    const { privacy } = useSelector(state=> state.getPrivacyPolicy);

    useEffect(()=>{
        dispatch(getPrivacyPolicy())
    }, [dispatch])
    return (
        <div className="container mb-16 mt-10">
            <h1 className=" text-4xl font-semibold text-[#575757] pb-5">Privacy Policy</h1>

            <div dangerouslySetInnerHTML={{ __html: privacy?.content }}></div>
        </div>
    )
}

export default PrivacyClient