"use client";
import React, { useEffect, useState } from "react";
import CommonHeading from "./CommonHeading";
import { LuPhoneCall, LuEye } from "react-icons/lu";
import OrderHistoryModal from "./OrderHistoryModal";
import { getOrders } from "@/redux/apiSlice/Profile/getOrderHistorySlice";
import { useDispatch, useSelector } from "react-redux";
import { Empty } from "antd";


const OrderHistory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const dispatch = useDispatch();
  const {orders} = useSelector(state=> state.getOrders);
  console.log(orders)

  useEffect(()=>{
    dispatch(getOrders())
  }, [dispatch])

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
            <a href="tel:1-855-396-2838">
              <LuPhoneCall size={24} />
            </a>
            <LuEye onClick={showModal} size={24} color="#555656" className="cursor-pointer" />
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
