"use client";
import React, { useEffect, useState }  from "react";
import {
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Select } from "antd";
import { Pagination } from "antd";
import Link from "next/link";
import { getProductList } from "@/redux/apiSlice/Product/getProductListSlice";
import { getCategory } from "@/redux/apiSlice/Category/getCategorySlice";
import { getSubCategory } from "@/redux/apiSlice/Category/getSubCategorySlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { ImageConfig } from "@/Config";
const { Option } = Select;


const ShopClient = () => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState("")
    const [subcategory, setSubCategory] = useState("")
    const { products, pagination } = useSelector(state=> state.getProducts);
    const { categories } = useSelector(state=> state.getCategory);
    const { subCategory } = useSelector(state=> state.getSubCategory);

    useEffect(()=>{
        dispatch(getProductList({category: category, subcategory: subcategory}))
    }, [dispatch, category, subcategory])

    useEffect(()=>{
        dispatch(getCategory());
        dispatch(getSubCategory());
    }, [dispatch])

    return (
        <div className=" container mb-20 mt-10 ">

            <div className="flex flex-col sm:flex-row items-end justify-end gap-6">

                <Select
                    placeholder="Select Price"
                    style={{
                        background: "transparent",
                        width: 150,
                        height: 48,
                        outline: "none",
                        borderRadius: "5px",
                        color: "#555656"
                    }}
                    >
                    <Option value="200">2000</Option>
                    <Option value="100">1000</Option>
                    <Option value="300">3000</Option>
                    <Option value="400">4000</Option>
                </Select>

                <Select
                    placeholder="Select  Category"
                    style={{
                        background: "transparent",
                        width: 250,
                        height: 48,
                        outline: "none",
                        borderRadius: "5px",
                    }}
                    onChange={(e)=>setCategory(e)}
                    >
                        {
                            categories?.map((category, index)=>{
                                return(
                                    <Option key={index} value={category?.categoryName} >{category?.categoryName}</Option>
                                )
                            })
                        }
                </Select>

                <Select
                    placeholder="Select  Sub Category"
                    style={{
                        background: "transparent",
                        width: 250,
                        height: 48,
                        outline: "none",
                        borderRadius: "5px",
                    }}
                    onChange={(e)=>setSubCategory(e)}
                >
                    {
                        subCategory?.map((category, index)=>{
                            return(
                                <Option key={index} value={category?.subcategoryName} >{category?.subcategoryName}</Option>
                            )
                        })
                    }
                </Select>

            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5  gap-6 relative mt-12">
                {
                    products?.map((product, index) => (
                        <Link href="/productDetails" key={index}>
                            <div className="mx-auto">
                                <div className="bg-gray-100 shadow-sm rounded  w-full pb-3 relative ">
                                <div className="relative w-full h-[220px] overflow-hidden rounded" >
                                    <Image 
                                        src={`${ImageConfig}${product?.productImage[0]}`} 
                                        alt="offer image"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>

                                    <p className=" text-[#7CC84E] absolute right-5 top-4 text-2xl">
                                        <HeartOutlined />
                                    </p>

                                    <div className="px-5 pb-5">
                                        <div className="flex justify-between px-1 pt-3">
                                            <h3 className="text-[555656] font-medium text-xl tracking-tight ">
                                                {product?.productName}
                                            </h3>
                                            <p className="text-[#929394] text-sm "> {product?.store} pc</p>
                                        </div>

                                        <div className="flex items-center justify-between mt-3">
                                        <p className="text-xl font-semibold text-[#7CC84E] ">
                                            ${product?.discountPrice}
                                            <span className="text-sm font-medium text-red-600 ps-2 line-through">${product?.price}</span>
                                        </p>

                                        <p className="text-[#7CC84E] bg-white  font-semibold rounded-lg text-2xl px-4 py-2 text-center">
                                            <ShoppingCartOutlined />
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>

            <div className="flex items-center sm:items-start justify-center md:justify-start mt-10 relative">
                <Pagination 
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

export default ShopClient;
