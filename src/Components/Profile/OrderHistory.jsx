import React from "react";
import CommonHeading from "./CommonHeading";

const items = [
  {
    id: 45678,
    total: 4,
    price: "250$",
    date: " 09-dec-2024 , 3:00 PM",
    btn: (
      <button className="bg-[#EFEEF6] p-2 text-[#5B52A3] text-lg  w-full   rounded ">
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
      <button className="bg-[#EFEEF6] p-2 text-[#5B52A3] text-lg  w-full   rounded">
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
      <button className="bg-[#7CC84E] p-2 text-white text-lg  w-full   rounded">
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
      <button className="bg-[#7CC84E] p-2 text-white text-lg  w-full   rounded ">
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
      <button className="bg-[#C3C4C6] p-2 text-red-500 text-lg  w-full   rounded ">
        {" "}
        cancled
      </button>
    ),
  },
  {
    id: 45672,
    total: 1,
    price: "250$",
    date: " 09-dec-2024 , 3:00 PM",
    btn: (
      <button className="bg-[#C3C4C6] p-2 text-red-500 text-lg  w-full   rounded ">
        {" "}
        cancled
      </button>
    ),
  },
];
const OrderHistory = () => {
  return (
    <div className="border border-[#DCDDDE4D] lg:p-10">
      <CommonHeading title={"Order History"} />

      <div>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center mt-8">
            <p className="text-[#555656] text-lg"> Order No: {item.id}</p>
            <p className="text-[#555656] text-lg">
              {" "}
              Total Products: {item.total}
            </p>
            <p className="text-[#555656] text-lg"> Price: {item.price}</p>
            <p className="text-[#555656] text-lg"> Date: {item.date}</p>
            <button> {item.btn}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
