'use client';
import { Pagination } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWeeklyDeal } from "@/redux/apiSlice/getWeeklyOfferSlice";
import Image from 'next/image';
import { ImageConfig } from '@/Config';

const DealClient = () => {
    const dispatch = useDispatch();
    const { WeeklyDeals } = useSelector(state=> state.getDeal);

    useEffect(()=>{
        dispatch(getWeeklyDeal())
    }, [dispatch]);  
    return (
        <div className='container my-10'>
            <h1 className='font-bold text-2xl mb-5'>Weekly Deals</h1>
            <div className='flex items-center gap-4 flex-wrap'>
                {
                    WeeklyDeals?.map((deal, index)=>{
                        return (
                            <div 
                                key={index}
                                className="relative w-[220px] h-[220px] overflow-hidden rounded" 
                            >
                                <Image 
                                    src={`${ImageConfig}${deal?.image}`} 
                                    alt="offer image"
                                    fill
                                    style={{objectFit: "cover"}}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DealClient