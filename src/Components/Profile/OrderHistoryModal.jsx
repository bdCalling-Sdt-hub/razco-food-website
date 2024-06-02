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
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal open={isModalOpen} onCancel={handleCancel} footer={false}>
      <div className=" p-5">
        <div className=" ">
          <p className=" text-[#7CC84E] text-lg font-medium  lg:mt-7">
            {" "}
            Order No : # 77777777777{" "}
          </p>

          <div className=" flex justify-between lg:mt-2 items-center">
            <div>
              <p className="text-[#929394] text-sm pt-3"> Name: User Name </p>
              <p className="text-[#929394] text-sm pt-3">
                {" "}
                Cnontuct No:+9900000000{" "}
              </p>
            </div>

            <button className=" text-[#7CC84E] rounded p-2 bg-[#D6EEC8] px-4">
              {" "}
              Shipping
            </button>
          </div>

          <p className="text-[#929394] text-sm pt-3 mb-6">
            {" "}
            13th Street. 47 W 13th St, New York, NY 10011{" "}
          </p>

          {/* product  */}
          {products.map((product) => (
            <div
              key={product.key}
              className=" flex items-center justify-between p-4 ps-5"
            >
              <p> {product.img}</p>
              <div>
                <p className="text-[#555656] text-lg font-medium ">
                  {" "}
                  {product.title}{" "}
                </p>
                <p className="text-[#524A93]"> 12*5qty=60</p>
              </div>
              <p className="text-[#70B446] text-2xl font-semibold">
                {" "}
                {product.price}
              </p>
            </div>
          ))}

          {/* payment  */}
          <p className=" flex justify-between px-3 mt-10">
            <span className=" text-xl font-medium  text-[#555656] ">
              {" "}
              Subtotal Amount{" "}
            </span>
            <span className=" text-xl font-medium text-[#555656]">
              {" "}
              $545.00{" "}
            </span>
          </p>

          <p className=" flex justify-between px-3 mt-4 mb-3">
            <span className=" text-xl font-medium  text-[#555656] ">
              {" "}
              Delivery Fee{" "}
            </span>
            <span className=" text-xl font-medium text-[#555656]">
              {" "}
              $55.00{" "}
            </span>
          </p>
          <p className="border-b border-[#DCDDDE] ps-3 "></p>

          <p className=" flex justify-between px-3 mt-2">
            <span className=" text-xl font-medium  text-[#555656] ">
              {" "}
              Total Amount{" "}
            </span>
            <span className=" text-xl font-medium text-[#555656]">
              {" "}
              $600.00{" "}
            </span>
          </p>
          <p className="text-sm text-[#6E6E6F] px-3 mt-3 ">
            You will earn 160 Points
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default OrderHistoryModal;
