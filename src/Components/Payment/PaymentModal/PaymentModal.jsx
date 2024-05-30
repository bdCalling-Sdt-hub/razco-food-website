import { Modal } from "antd";
import React from "react";
import success from "@/assets/success.png";
import Image from "next/image";
import Link from "next/link";

const PaymentModal = ({ open, setOpen }) => {
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div>
      <Modal
        ti
        open={open}
        onCancel={handleCancel}
        footer={false}
        className=" text-center"
      >
        <Image
          src={success}
          width={75}
          height={20}
          alt=" "
          className="mx-auto mt-8"
        />
        <p className=" text-xl  font-medium text-[#555656] mt-5">
          Payment Successful
        </p>
        <p className=" text-[#6E6E6F] text-sm  mt-2">
          User Name: Naziya Sultana Mithila
        </p>
        <p className=" text-[#6E6E6F] text-sm  mt-2">Contact No:+9900000000</p>
        <p className=" text-[#6E6E6F] text-sm  mt-2">
          Address: 13th Street. 47 W 13th St, New York, NY 10011
        </p>
        <p className=" text-[#6E6E6F] text-sm  mt-2">
          Order No: #7777777777777
        </p>
        <p className=" text-[#6E6E6F] text-sm  mt-2">
          Delivery Date: 04/04/2024
        </p>
        <p className=" text-[#6E6E6F] text-sm  mt-2">Delivery Time: 04:00 pm</p>

        <p className=" text-[#5B52A3] text-sm  mt-2 font-medium">
          Your order has been confirmed
        </p>
        <p className=" text-[#7CC84E] text-sm  mt-2">
          You will earn 160 Points
        </p>

        <div className=" flex gap-3 items-center  justify-center mt-6">
          <Link
            href="/paymentDetails"
            className=" bg-[#7CC84E] p-3 text-white text-lg  lg:w-1/3     rounded-lg"
          >
            <button className="  ">Order History</button>
          </Link>

          <Link
            href="/"
            className="  p-3 text-[#7CC84E] text-lg  lg:w-1/3 border border-[#7CC84E]   rounded-lg"
          >
            <button className="  ">Back Home</button>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default PaymentModal;
