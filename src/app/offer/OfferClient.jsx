"use client"
import React, { useEffect, useState } from "react";
import {
  DownOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Pagination, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getOffer } from "@/redux/apiSlice/getOfferSlice";
import { getProductList } from "@/redux/apiSlice/Product/getProductListSlice";
import Image from "next/image";
import { ImageConfig } from "@/Config";
const { Option } = Select;


const OfferClient = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const { offers } = useSelector(state=> state.getOffer);
    const [offer, setOffer] = useState()
    const { products, pagination } = useSelector(state=> state.getProducts);


    useEffect(()=>{
        dispatch(getOffer())
    }, [dispatch,]); 
    
    
    useEffect(()=>{
        setOffer(offers[0]?._id)
    }, [offers]); 


    
    useEffect(()=>{
        dispatch(getProductList({offer: offer}))
    }, [dispatch, offer]);

    const handleChange=(page)=>{
        setPage(page)
    }

    return (
        <div className=" container mt-10 mb-20 ">
            <div className="flex items-end justify-end">
                <Select
                    placeholder="Browse Offer"
                    style={{
                        background: "transparent",
                        width: 150,
                        height: 48,
                        outline: "none",
                        borderRadius: "5px",
                        color: "#555656"
                    }}
                    defaultValue={offers[0]?._id}
                    onChange={(e)=>setOffer(e)}
                    >
                        {
                            offers?.map((offer, index)=>{
                                return(
                                    <Option key={index} value={offer?._id} >{offer?.offerName}</Option>
                                )
                            })
                        }
                </Select>
            </div>

            <div className=" mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 relative">
                {
                    products?.map((product, index) => (
                        <div key={index} className=" mx-auto w-full lg:w-[300px] sm:w-full ">
                            <div className="bg-gray-100 shadow-sm rounded w-full py-3 relative ">
                                <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
                                    <Image 
                                        src={`${ImageConfig}${product?.productImage[0]}`} 
                                        alt="offer image"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>

                                <p className=" bg-red-600 text-white  ps-4 rounded text-lg w-1/3 absolute left-2 top-2">{product?.offer?.percentage}% off</p>
                                <p className=" text-[#7CC84E] absolute right-5 top-4 text-2xl">
                                {" "}
                                <HeartOutlined />{" "}
                                </p>
                                <div className="px-5 pb-5">
                                <div className="flex justify-between px-1 pt-3">
                                    <h3 className="text-[555656] font-medium text-xl tracking-tight ">
                                    {product?.productName}
                                    </h3>
                                    <p className="text-[#929394] text-sm ">{product?.store} pc</p>
                                </div>

                                <div className="flex items-center justify-between mt-3">
                                    <p className="text-xl font-semibold text-[#7CC84E] ">
                                    ${product?.discountPrice} 
                                    <span className="text-sm font-medium text-red-600 ps-2 line-through">
                                        ${product?.price}
                                    </span>
                                    </p>

                                    <p className="text-[#7CC84E] bg-white  font-semibold rounded-lg text-2xl px-4 py-2 text-center">
                                    <ShoppingCartOutlined />
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="flex items-center sm:items-start justify-center md:justify-start mt-10 relative">
                <Pagination
                    defaultCurrent={page}
                    onChange={handleChange}
                    total={pagination?.total}
                    showTotal={(total, range) => 
                        <span className="text-[#929394] hidden sm:block font-normal text-[16px] leading-[18px] absolute top-[24%] right-0">
                            {`Showing ${range[0]}-${range[1]} of ${total} items`}
                        </span>
                    }
                />
            </div>
        </div>
    );
};

export default OfferClient;
