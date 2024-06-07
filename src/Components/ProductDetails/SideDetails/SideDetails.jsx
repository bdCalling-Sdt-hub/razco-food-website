"use client"
import { LuMinus, LuPlus } from "react-icons/lu";
import Link from "next/link";
import React, { useContext, useState } from "react";
import PaymentModal from "@/Components/PaymentModal";
import { makeCart } from "@/redux/apiSlice/Cart/makeCartSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import useLoginModal from "@/hooks/useLoginModal";
import { UserContext } from "@/provider/User";

const SideDetails = ({product}) => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const loginModal = useLoginModal();
  const {user} = useContext(UserContext);


  const handleCart = () => {
    dispatch(makeCart({product: product?._id, quantity: count})).then((response)=>{
        if(response?.type === "makeCart/fulfilled"){
            toast.success(response?.payload?.message)
        }
    })
  };
  return (
    <div className=" ">
      <h1 className=" text-3xl font-semibold  poppins text-secondary pb-6 "> {product?.productName} </h1>

      <p className="font-medium text-primary text-[40px] leading-[60px]">
        ${product?.discountPrice ? product?.discountPrice : product?.price}  <sub className="text-[#929394] font-normal text-[24px] leading-[36px]"> {product?.weight} </sub>
      </p>

      <div className=" flex items-center gap-4 lg:mt-8 mt-4 lg:mb-9 mb-4  ">
        <button disabled={count === 1} onClick={()=>setCount(count - 1)} className=" w-12 h-12 flex items-center justify-center bg-[#EFEEF6] rounded  text-center">
          <LuMinus color="#6E6E6F" />
        </button>

        <button disabled className=" w-12 h-12 flex items-center justify-center  bg-[#EFEEF6] rounded  text-center text-[#6E6E6F]">{count}</button>

        <button onClick={()=>setCount(count+ 1)} className=" w-12 h-12  bg-[#EFEEF6] flex items-center justify-center rounded  text-center">
          <LuPlus color="#6E6E6F"  />
        </button>
      </div>

      <div className="w-full">
          <button 
            onClick={()=>{
              if(!user){
                loginModal.onOpen()
              }else{
                handleCart()
              }
            }} 
            className="poppins w-full text-[#70B446] border border-[#70B446] p-2 mb-6 rounded font-medium"
          >
            Add to Cart
          </button>

        {/* <br />
        <button
          className="poppins bg-[#7CC84E] text-white w-full  p-2 rounded"
          onClick={()=>{
            if(!user){
              loginModal.onOpen()
            }else{
              setOpen(true)
            }
          }}
        
        >
          Buy Now
        </button> */}


      </div>
      <p className=" font-medium text-xl text-[#555656] mt-8 poppins">
        Products Details
      </p>
      <p className="text-[#929394] text-sm leading-loose pt-2 poppins"> {product?.description}  <span className=" text-[#5B52A3]"> more... </span>
      </p>


      {/* <PaymentModal open={open} setOpen={setOpen}  total = { (product?.discountPrice ? product?.discountPrice : product?.price) * count } /> */}


    </div>
  );
};

export default SideDetails;
