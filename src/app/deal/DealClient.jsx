'use client';
import { ConfigProvider, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWeeklyDeal } from "@/redux/apiSlice/getWeeklyOfferSlice";
import Image from 'next/image';
import { ImageConfig } from '@/Config';

const DealClient = () => {
    const dispatch = useDispatch();
    const { WeeklyDeals } = useSelector(state => state.getDeal);
    const [Open, setOpen] = useState(null)

    useEffect(() => {
        dispatch(getWeeklyDeal())
    }, [dispatch]);
    return (
        <div className='container my-10'>
            <h1 className='font-bold text-2xl mb-5'>Weekly Deals</h1>
            <div className='flex items-center gap-6 flex-wrap'>
                {
                    WeeklyDeals?.map((deal, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => setOpen(deal)}
                                className="relative border mx-auto sm:mx-0 cursor-pointer p-1 w-[220px] h-[220px] overflow-hidden rounded"
                            >
                                <Image
                                    src={`${ImageConfig}${deal?.image}`}
                                    alt="offer image"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <ConfigProvider
                theme={{
                    components: {
                        Modal: {
                            wireframe: true,
                        }
                    }
                }}
            >
                <Modal
                    centered
                    open={Open}
                    onCancel={() => setOpen(null)}
                    footer={null}
                    footerStyle={{ padding: 0 }}
                    width={500}
                    closeIcon={false}
                    bodyStyle={{ padding: 0 }}
                >
                    <div
                        className="relative border overflow-hidden rounded"
                        style={{ width: 500, height: 500, padding: 0 }} // Remove inner div padding
                    >
                        <Image
                            src={`${ImageConfig}${Open?.image}`}
                            alt="offer image"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </Modal>
            </ConfigProvider>
        </div>
    )
}

export default DealClient