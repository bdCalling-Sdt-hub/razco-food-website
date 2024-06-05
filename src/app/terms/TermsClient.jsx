"use client"
import React, { useEffect } from 'react'
import { getTerms } from "@/redux/apiSlice/getTermsAndConditionSlice"
import { useDispatch, useSelector } from "react-redux";

const TermsClient = () => {
    const dispatch = useDispatch()
    const { terms } = useSelector(state=> state.getTerms);

    useEffect(()=>{
        dispatch(getTerms())
    }, [dispatch])

    return (
        <div className="container mb-16 mt-10">
            <h1 className=" text-4xl font-semibold text-[#575757] pb-5">Terms And Condition</h1>
        
            <div dangerouslySetInnerHTML={{ __html: terms?.content }}></div>
            
        </div>
    )
}

export default TermsClient