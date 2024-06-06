"use client";
import React, { useEffect, useState } from "react";
import CommonHeading from "./CommonHeading";
import { LuPhoneCall, LuEye } from "react-icons/lu";
import OrderHistoryModal from "./OrderHistoryModal";
import { getOrders } from "@/redux/apiSlice/Profile/getOrderHistorySlice";
import { useDispatch, useSelector } from "react-redux";
import { Empty } from "antd";

const items = [
  {
    id: 45678,
    total: 4,
    price: "250$",
    date: " 09-dec-2024 , 3:00 PM",
    btn: (
      <button className="bg-[#EFEEF6] p-2 text-[#5B52A3] lg:text-lg text-sm  w-full   rounded ">
        {" "}
        Pending
      </button>
    ),
  },
  {
    id: 45679,
    total: 3,
    price: "250$",
    date: " 09-dec-2024 , 3:00 PM",
    btn: (
      <button className="bg-[#EFEEF6] p-2 text-[#5B52A3] lg:text-lg text-sm w-full   rounded">
        {" "}
        Pending
      </button>
    ),
  },
  {
    id: 45675,
    total: 5,
    price: "250$",
    date: " 09-dec-2024 , 3:00 PM",
    btn: (
      <button className="bg-[#7CC84E] p-2 text-white lg:text-lg text-sm  w-full   rounded">
        {" "}
        Shipped
      </button>
    ),
  },
  {
    id: 45676,
    total: 6,
    price: "250$",
    date: " 09-dec-2024 , 3:00 PM",
    btn: (
      <button className="bg-[#7CC84E] p-2 text-white lg:text-lg text-sm  w-full   rounded ">
        {" "}
        Shipped
      </button>
    ),
  },
  {
    id: 45677,
    total: 7,
    price: "250$",
    date: " 09-dec-2024 , 3:00 PM",
    btn: (
      <button className="bg-[#C3C4C6] p-2 text-red-500 lg:text-lg text-sm w-full   rounded ">
        {" "}
        Cancled
      </button>
    ),
  },
  {
    id: 45672,
    total: 1,
    price: "250$",
    date: " 09-dec-2024 , 3:00 PM",
    btn: (
      <button className="bg-[#C3C4C6] p-2 text-red-500 lg:text-lg text-sm  w-full   rounded ">
        {" "}
        Cancled
      </button>
    ),
  },
];
const OrderHistory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const dispatch = useDispatch();
  const {orders} = useSelector(state=> state.getOrders);

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
            <p className="text-[#555656] lg:text-lg text-sm">
              {" "}
              Order No: {item.id}
            </p>
            <p className="text-[#555656] lg:text-lg text-sm">
              {" "}
              Total Products: {item.total}
            </p>
            <p className="text-[#555656] lg:text-lg text-sm">
              {" "}
              Price: {item.price}
            </p>

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
