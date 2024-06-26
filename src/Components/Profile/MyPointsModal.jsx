
import { Modal } from "antd";
import React from "react";

const MyPointsModal = ({ isModalOpen, setIsModalOpen }) => {
  

  
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
        className="text-center p-5 "
      >
        <p className=" text-lg text-[#5B52A3] py-2 font-medium mt-4 font-[poppins]">
          Buy this Coupon Offer ?
        </p>
        <p className=" text-sm text-[#555656] font-[poppins]">10% Discount</p>
        <p className=" text-sm text-[#555656] py-2 font-[poppins] ">
          Validity Date: 20-Dec-2024
        </p>
        <p className=" text-sm text-[#555656] font-[poppins] ">Point: 2k</p>
        <button className=" text-white rounded p-2 bg-[#7CC84E] px-4 my-2 lg:mt-5 mt-3 font-[poppins]">
          {" "}
          Confirm
        </button>
      </Modal>
    </div>
  );
};

export default MyPointsModal;
