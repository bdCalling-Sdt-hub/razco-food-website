"use client"
import React, { useEffect, useState } from "react";
import img1 from "@/assets/fruit1.png";
import img2 from "@/assets/fruit2.png";
import img3 from "@/assets/offer.png";
import Image from "next/image";
import { LuTrash2 } from "react-icons/lu";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Summary from "./Summary";


const products = [
  {
    key: 1,
    img: <Image src={img1} height={80} width={120} alt=" " />,
    title: " Tamato",
    price: 12,
    weight: "500gm",
    quantity: 1,

  },
  {
    key: 2,
    img: <Image src={img2} height={80} width={120} alt=" " />,
    title: " Orange",
    price: 18,
    weight: "500gm",
    quantity: 1,
  },
  {
    key: 3,
    img: <Image src={img3} height={80} width={120} alt=" " />,
    title: " Apple",
    price: 16,
    weight: "500gm",
    quantity: 2,
  },
  {
    key: 4,
    img: <Image src={img1} height={80} width={120} alt=" " />,
    title: " Tamato",
    price: 15,
    weight: "500gm",
    quantity: 1,
  },
  {
    key: 5,
    img: <Image src={img2} height={80} width={120} alt=" " />,
    title: " Orange",
    price: 20,
    weight: "500gm",
    quantity: 1,
  },
  {
    key: 6,
    img: <Image src={img3} height={80} width={120}alt=" " />,
    title: " Apple",
    price: 18,
    weight: "500gm",
    quantity: 4,
  },
];


const AddCarts = () => {
  const [filterProducts, setfilterProducts] = useState(products);

  useEffect(()=>{
    setfilterProducts([...products])
  }, [])

  const handleDelete=(key)=>{
    const filter = filterProducts.filter((item, index)=> item.key !== key);
    setfilterProducts([...filter])
  }

  const handleIncrese=(key)=>{
    const updatedProducts = filterProducts.map((item) => {
      if (item.key === key && item.quantity > 0) {
        return { ...item, quantity: item.quantity + 1}
      }
      return item;
    });
    setfilterProducts([...updatedProducts]);
  }

  const handleDecrese=(key)=>{
    const updatedProducts = filterProducts.map((item) => {
      if (item.key === key && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1}
      }
      return item;
    });
    setfilterProducts([...updatedProducts]);
  }

  const total = filterProducts.reduce((accumulator, currentItem) => {
    return accumulator + (currentItem.quantity * currentItem.price);
  }, 0);


  return (
    <div className="container mb-5 mt-5">
      <div className=" grid grid-cols-12 gap-6 lg:gap-10">

        <div className="col-span-12 md:col-span-6 order-2 lg:order-1">
          {filterProducts.map((product) => (
            <div
              key={product.key}
              className=" flex items-center justify-between p-3 bg-[#F8F8FC] mb-4 rounded"
            >
              <p> {product.img}</p>
              <div>
                <h3 className="text-[#555656] text-xl font-medium">
                  {" "}
                  {product.title}
                </h3>
                <p className=" text-sm text-[#929394]"> {product.weight}</p>

                <div className=" flex gap-3   mt-2  mb-3  ">
                  <button onClick={()=>handleDecrese(product?.key)} className=" w-8 h-8 flex items-center justify-center  bg-[#e4e6e9] rounded  text-center">
                    <FaMinus size={18} color="#6E6E6F" />
                  </button>

                  <button className=" w-8 h-8  flex items-center justify-center bg-[#e4e6e9] rounded  text-center">
                    {product?.quantity}
                  </button>

                  <button onClick={()=>handleIncrese(product?.key)} className=" w-8 h-8  flex items-center justify-center bg-[#e4e6e9] rounded  text-center">
                    <FaPlus size={18} color="#6E6E6F" />
                  </button>
                </div>
              </div>

              <p className=" text-[#70B446] text-2xl font-semibold">
                ${product.price}
              </p>

                <LuTrash2 onClick={()=>handleDelete(product.key)} className="cursor-pointer" size={24} color="#C11415" />
            </div>
          ))}
        </div>

        <div className="col-span-12 md:col-span-6 order-1 lg:order-1">
        <Summary filterProducts={filterProducts} total={total} />
        </div>

      </div>
    </div>
  );
};

export default AddCarts;
