"use client";
import React, { useEffect, useState } from "react";
import CommonHeading from "./CommonHeading";
import { LuPhoneCall, LuEye } from "react-icons/lu";
import OrderHistoryModal from "./OrderHistoryModal";
import { getOrders } from "@/redux/apiSlice/Profile/getOrderHistorySlice";
import { callForPickUp } from "@/redux/apiSlice/Order/callPickUpSlice"
import { useDispatch, useSelector } from "react-redux";
import { Empty } from "antd";
import toast from "react-hot-toast";


const OrderHistory = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const {loading} = useSelector(state=> state.callPickUp);


  

  const dispatch = useDispatch();
  const {orders} = useSelector(state=> state.getOrders);

  useEffect(()=>{
    dispatch(getOrders())
  }, [dispatch])


  const handlePickUp=()=>{
    dispatch(callForPickUp()).then((res)=>{
      if(res.type === "callForPickUp/fulfilled"){
        toast.success(res?.payload);
      }
    })
  }

  return (
    <div className="border border-[#DCDDDE4D] lg:p-10 p-3">
      <CommonHeading title={"Order History"} />

      <div style={{display: orders?.length > 0 ? "block": "none"}}>
        {orders?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center mt-8 lg:gap-1 gap-2"
          >
            <p className="text-[#555656] lg:text-lg text-sm">Order No: {item?.orderId}</p>
            <p className="text-[#555656] lg:text-lg text-sm">Total Products: {item?.totalItem}</p>
            <p className="text-[#555656] lg:text-lg text-sm">Price: {item?.price}</p>

            <button> {item.btn}</button>

            {
              item?.callForPickup 
              && 
              <a href="tel:0123456788?call" target="_blank">
                <LuPhoneCall color="#7CC84E" size={24} />
              </a>
            }
            <LuEye onClick={()=>setIsModalOpen(item)} size={24} color="#555656" className="cursor-pointer" />
          </div>
        ))}
      </div>

      <div className="w-full h-full" style={{display: orders?.length === 0 ? "block": "none"}}>
        <Empty />
      </div>

      <OrderHistoryModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
    </div>
  );
};

export default OrderHistory;
