"use client";
import React, { useCallback, useContext, useEffect, useState }  from "react";
import {
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Select, Slider } from "antd";
import { Pagination } from "antd";
import Link from "next/link";
import { getProductList } from "@/redux/apiSlice/Product/getProductListSlice";
import { getCategory } from "@/redux/apiSlice/Category/getCategorySlice";
import { getSubCategory } from "@/redux/apiSlice/Category/getSubCategorySlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { ImageConfig } from "@/Config";
const { Option } = Select;
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { makeWish } from "@/redux/apiSlice/Wish/makeWishSlice";
import { makeCart } from "@/redux/apiSlice/Cart/makeCartSlice";
import toast from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useLoginModal from "@/hooks/useLoginModal";
import { UserContext } from "@/provider/User";


const ShopClient = () => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState("")
    const [subcategory, setSubCategory] = useState("")
    const [subcategoryId, setSubCategoryId] = useState()
    const [price, setPrice] = useState()
    const { products, pagination } = useSelector(state=> state.getProducts);
    const { categories } = useSelector(state=> state.getCategory);
    const { subCategory } = useSelector(state=> state.getSubCategory);
    const loginModal = useLoginModal();
    const {user} = useContext(UserContext);

    useEffect(()=>{
        dispatch(getProductList({category: category, subcategory: subcategory, price: price}))
    }, [dispatch, category, subcategory, price])

    useEffect(()=>{
        dispatch(getCategory());
    }, [dispatch]);

    useEffect(()=>{
        if(subcategoryId){
            dispatch(getSubCategory(subcategoryId));
        }
    }, [dispatch, subcategoryId]);

    useEffect(()=>{
        dispatch(getSubCategory());
    }, [dispatch]);

    const handleWish=(e, id)=>{
        e.stopPropagation();
        e.preventDefault();
    
        if(!user?.email){
          loginModal.onOpen()
        }else{
          dispatch(makeWish(id)).then((response)=>{
            if(response?.type === "makeWish/fulfilled"){
                dispatch(getProductList({category: category, subcategory: subcategory, price: price}))
                toast.success(response?.payload?.message)
            }
          })
        }
    }

    const handleCart = (e, id) => {
        e.stopPropagation();
        e.preventDefault();
    
        if(!user?.email){
          loginModal.onOpen()
        }else{
          dispatch(makeCart({product: id, quantity: 1})).then((response)=>{
            if(response?.type === "makeCart/fulfilled"){
                dispatch(getProductList({category: category, subcategory: subcategory, price: price}))
              toast.success(response?.payload?.message)
            }
          })
        }
    };

    const handleCategory = useCallback((value) => {
        if (value?.split('|')[0] !== subcategoryId) {
          setSubCategoryId(value?.split('|')[0]);
        }
        setCategory(value?.split('|')[1]);
    }, [subcategoryId]);

    const getUniquePrices = useCallback((products) => {
        const allPrices = products?.flatMap(product =>  product.price);
        const uniquePrices = [...new Set(allPrices)];
        uniquePrices.sort((a, b) => a - b);
        return uniquePrices;
    }, []);

    const maxPrice = getUniquePrices(products);
    const formatter = (value) => `${value}`;

    return (
        <div className=" container mb-20 mt-10 ">

            <div className="flex flex-col sm:flex-row items-end justify-end gap-6">

                <div className="border">
                    <Slider 
                        style={{width: 250}} 
                        tooltip={{formatter}}
                        step={50}
                        max={500}
                        defaultValue={500}
                        onChange={(e)=>setPrice(e)}
                    />
                </div>

                <Select
                    placeholder="Select  Category"
                    style={{
                        background: "transparent",
                        width: 250,
                        height: 48,
                        outline: "none",
                        borderRadius: "5px",
                    }}
                    defaultValue={"All"}
                    onChange={handleCategory}

                    >
                        <Option  value="" >All</Option>
                        {
                            categories?.map((category, index)=>{
                                return(
                                    <Option key={index} value={`${category?._id}|${category?.categoryName}`} >{category?.categoryName}</Option>
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
                    defaultValue={"All"}
                >
                    <Option  value="" >All</Option>
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
                        <Link href={`/productDetails/${product?._id}`} key={index}>
                            <div className="bg-gray-100 shadow-sm rounded  w-full p-2 relative ">
                                <div className="relative w-full h-[220px] overflow-hidden rounded" >
                                    {
                                        product?.productImage[0]
                                        &&
                                        <Image 
                                            src={  product?.productImage[0]?.startsWith("https") ?  product?.productImage[0]: `${ImageConfig}${product?.productImage[0]}`} 
                                            alt="offer image"
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    }
                                </div>

                                <div
                                    className="
                                        absolute  top-4 right-4
                                        hover:opacity-80
                                        transition
                                        cursor-pointer
                                    "
                                    onClick={(e) => handleWish(e, product?._id)}
                                >
                                    <AiOutlineHeart
                                        size={28}
                                        className="
                                            fill-primary
                                            absolute
                                            -top-[2px]
                                            -right-[2px]
                                        "
                                    />
                                    <AiFillHeart
                                        size={24}
                                        className={
                                            `${ product?.favorite ? "fill-primary " : "fill-neutral-500/70" }`
                                        }
                                    />
                                </div>

                                <div className="px-2 pb-5">
                                    <div className="flex justify-between px-1 pt-3">
                                        <p className="text-[555656] poppins font-medium text-[18px] leading-7 ">
                                            {product?.productName}
                                        </p>
                                        <p className="text-[#929394] text-[16px] leading-6 font-thin poppins "> {product?.store} pc</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <p className="text-[18px] leading-5 font-semibold text-primary">
                                            ${product?.discountPrice ? product?.discountPrice: product?.price }
                                            <span style={{display: product?.discountPrice ? "block" : "none" }} className="text-[12px] font-medium text-red-600 ps-2 line-through">${ product?.price}</span>
                                        </p>
                                        <div onClick={(e)=>handleCart(e, product?._id)} className="text-primary flex items-center justify-center w-10 h-10 bg-white rounded-lg">
                                            <MdOutlineAddShoppingCart size={20} />
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
