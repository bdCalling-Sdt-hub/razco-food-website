import React from "react";
import CommonHeading from "./CommonHeading";
import { LuPhoneCall } from "react-icons/lu";

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

  return (
    <div className="border border-[#DCDDDE4D] lg:p-10 p-3">
      <CommonHeading title={"Order History"} />

      <div>
        {items.map((item) => (
          <div
            key={item.id}
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
            <p className="text-[#555656] lg:text-lg text-sm">
              {" "}
              Date: {item.date}
            </p>
            <button> {item.btn}</button>
            <a href="tel:1-855-396-2838"><LuPhoneCall size={24} /></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
