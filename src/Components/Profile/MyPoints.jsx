import React, { useState } from "react";
import CommonHeading from "./CommonHeading";
import Image from "next/image";
import point from "@/assets/point.png";
import MyPointsModal from "./MyPointsModal";

const items = [
  {
    id: 1,
    title: " 10% Discount ",
    date: " 09-Dec-2024",
    point: "2k",
    btn: (
      <button className="bg-[#7CC84E] p-2 text-white text-sm  lg:w-[28]   rounded ">
        {" "}
        claim Promo
      </button>
    ),
  },
  {
    id: 2,
    title: " 20% Discount ",
    date: " 09-Dec-2024",
    point: "2k",
    btn: (
      <button className="bg-[#E6E5F1] p-2 text-[#5B52A3] text-sm  lg:w-[28]   rounded ">
        {" "}
        claim Promo
      </button>
    ),
  },
  {
    id: 3,
    title: " 15% Discount ",
    date: " 09-Dec-2024",
    point: "2k",
    btn: (
      <button className="bg-[#7CC84E] p-2 text-white text-sm  lg:w-[28]   rounded ">
        {" "}
        claim Promo
      </button>
    ),
  },
];
const MyPoints = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="border border-[#DCDDDE4D] lg:p-6 p-2 font-[poppins]">
      <CommonHeading title={"My Points"} />
      <div>
        <div className=" flex items-center gap-5 bg-[#5B52A3] p-4 ps-6  rounded mt-5 ">
          <Image src={point} width={40} height={10} alt="" />
          <div>
            <p className=" text-lg text-white font-semibold pb-2 ">
              {" "}
              Available Points : 2000{" "}
            </p>
            <p className=" text-white text-sm  "> Used Points : 12000 </p>
          </div>
        </div>

        {/* todo: Link  */}
        <button className="bg-[#7CC84E] h-12 text-white text-lg w-full mt-6  rounded  ">
          Coupon Store
        </button>

        <p className=" text-lg text-[#555656] pt-4 font-medium  "> </p>
        {items.map((item) => (
          <div
            key={item.id}
            className=" flex justify-between items-center bg-[#f8f8fa] p-4 px-6 mb-2 rounded border border-gray-300"
          >
            <div>
              <p className=" text-[#555656] text-sm  leading-7 ">
                {" "}
                {item.title}{" "}
              </p>

              <p className=" text-[#555656] text-sm leading-7 ">
                {" "}
                Validity Date: {item.date}
              </p>
              <p className=" text-[#555656] text-sm leading-7 flex gap-2">
                {" "}
                points: <Image src={point} width={20} height={2} alt="" />{" "}
                {item.point}
              </p>
            </div>
            <p onClick={showModal}> {item.btn} </p>
          </div>
        ))}

        <MyPointsModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
};

export default MyPoints;
