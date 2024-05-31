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
        <p className=" text-[32px] leading-[42px]  font-medium text-secondary poppins mt-5">
          Payment Successful
        </p>
        <p className=" text-[20px] leading-[32px]  font-normal text-[#6E6E6F] poppins">
          User Name: Naziya Sultana Mithila
        </p>
        <p className=" text-[20px] leading-[32px]  font-normal text-[#6E6E6F] poppins">Contact No:+9900000000</p>
        <p className=" text-[20px] leading-[32px]  font-normal text-[#6E6E6F] poppins">
          Address: 13th Street. 47 W 13th St, New York, NY 10011
        </p>

        <br />

        <p className=" text-[20px] leading-[32px]  font-normal text-[#6E6E6F] poppins">
          Order No: #7777777777777
        </p>
        <p className=" text-[20px] leading-[32px]  font-normal text-[#6E6E6F] poppins">
          Delivery Date: 04/04/2024
        </p>
        <p className=" text-[20px] leading-[32px]  font-normal text-[#6E6E6F] poppins">Delivery Time: 04:00 pm</p>

        <p className=" text-[20px] leading-[32px]  font-normal text-[#5B52A3] poppins">
          Your order has been confirmed
        </p>
        <p className=" text-[20px] leading-[32px]  font-normal text-primary poppins">
          You will earn 160 Points
        </p>

        <div className=" flex gap-3 items-center  justify-center mt-6">
          <Link
            href="/paymentDetails"
            className="w-full"
          >
            <button className="h-[48px] poppins w-full text-white  bg-primary rounded-lg">Order History</button>
          </Link>

          <Link
            href="/"
            className="w-full"
          >
            <button className=" h-[48px] poppins w-full text-primary border border-primary rounded-lg ">Back Home</button>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default PaymentModal;
