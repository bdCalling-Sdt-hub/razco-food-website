import React from "react";
import Image from "next/image";
import img1 from "@/assets/fruit1.png";
import img2 from "@/assets/fruit2.png";
import { Modal } from "antd";

const products = [
  {
    key: 1,
    img: <Image src={img1} height={40} width={80} alt=" " />,
    title: " Tamato",
    price: "$12",
  },
  {
    key: 2,
    img: <Image src={img2} height={40} width={80} alt=" " />,
    title: " Orange",
    price: "$15",
  },
];

const OrderHistoryModal = ({ isModalOpen, setIsModalOpen }) => {
  

  return (
    <Modal open={isModalOpen} onCancel={()=>setIsModalOpen(null)} footer={false}>
      <div className=" p-5">
        <div className=" ">
          <p className=" text-[#7CC84E] text-lg font-medium  lg:mt-7">
            Order No : {isModalOpen?.orderId}
          </p>

          <div className=" flex justify-between lg:mt-2 items-center">
            <div>
              <p className="text-[#929394] text-sm pt-3"> Name: {isModalOpen?.user?.name} </p>
              <p className="text-[#929394] text-sm pt-3">
                Cnontuct No: {isModalOpen?.user?.phone}
              </p>
            </div>

            <button className=" text-[#7CC84E] rounded p-2 bg-[#D6EEC8] px-4">
  
              Shipping
            </button>
          </div>

          <p className="text-[#929394] text-sm pt-3 mb-6">{isModalOpen?.user?.address}</p>

          {/* product  */}
          {isModalOpen?.cart?.products?.map((product, index) => (
            <div
              key={index}
              className=" flex items-center  justify-between px-4 border-b-[1px] py-2"
            >
              <div className="relative  w-16 h-16 overflow-hidden rounded">
                <Image
                  src={`${ImageConfig}${product?.product?.productImage[0]}`}
                  alt="offer image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div>
                <p className="text-[#555656] text-lg font-medium ">{product?.product?.productName}</p>
                <p className="text-[#524A93]">
                  Price {product?.product?.price} * {product?.quantity} Quantity
                </p>
              </div>

              <p className="text-[#70B446] text-2xl font-semibold">
                $ { (product?.product?.discountPrice ? product?.product?.discountPrice  : product?.product?.price) * product?.quantity}
              </p>
            </div>
          ))}

          {/* payment  */}
          <p className=" flex justify-between px-3 mt-10">
            <span className=" text-xl font-medium  text-[#555656] ">Subtotal Amount</span>
            <span className=" text-xl font-medium text-[#555656]">${isModalOpen?.price}</span>
          </p>

          <p className=" flex justify-between px-3 mt-4 mb-3">
            <span className=" text-xl font-medium  text-[#555656] ">Delivery Fee</span>
            <span className=" text-xl font-medium text-[#555656]">${isModalOpen?.deliveryFee}</span>
          </p>
          <p className="border-b border-[#DCDDDE] ps-3 "></p>

          <p className=" flex justify-between px-3 mt-2">
            <span className=" text-xl font-medium  text-[#555656] ">Total Amount</span>
            <span className=" text-xl font-medium text-[#555656]">${isModalOpen?.deliveryFee + isModalOpen?.price}</span>
          </p>
          <p className="text-sm text-[#6E6E6F] px-3 mt-3 ">
            You will earn {isModalOpen?.points} Points
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default OrderHistoryModal;
