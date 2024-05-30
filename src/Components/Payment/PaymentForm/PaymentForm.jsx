"use client";
import React, { useState } from "react";
import { Form } from "antd";
import "./style.css";
import PaymentModal from "../PaymentModal/PaymentModal";
const PaymentForm = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  return (
    <div className="w-2/3 mx-auto lg:mb-20 mb-5">
      <Form layout="vertical" className="  ">
        <div className="">
          <input
            type="text"
            placeholder=" Cardholder Name "
            className="custom-input-password w-full p-2  lg:mb-10 mb-4 placeholder:text-[#555555] placeholder:text-lg placeholder:font-medium "
          />
        </div>

        <div className="">
          <input
            type="text"
            placeholder=" Card Number "
            className="custom-input-password w-full p-2  lg:mb-10 mb-4 placeholder:text-[#555555] placeholder:text-lg placeholder:font-medium  "
          />
        </div>

        <div className=" flex gap-3 items-center w-full">
          <div className=" w-1/2">
            <input
              type="text"
              placeholder=" MM/YY "
              className="custom-input-password w-full p-2  lg:mb-10 mb-4   placeholder:text-[#555555] placeholder:text-lg placeholder:font-medium   "
            />
          </div>

          <div className="w-1/2">
            <input
              type="text"
              placeholder=" CVC "
              className="custom-input-password w-full p-2 lg:mb-10 mb-4   placeholder:text-[#555555] placeholder:text-lg placeholder:font-medium  "
            />
          </div>
        </div>

        <div className="mb-3">
          <input
            type="text"
            placeholder=" mstkhushiakter333@gmail.com "
            className="custom-input-password w-full p-2 lg:mb-10 mb-4   placeholder:text-[#555555] placeholder:text-lg placeholder:font-medium  "
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            placeholder=" Total Amount  "
            className="custom-input-password w-full p-2    placeholder:text-[#555555] placeholder:text-lg placeholder:font-medium  "
          />
        </div>

        <Form.Item>
          <button
            className="bg-[#7CC84E] h-12 text-white text-lg w-full   rounded-lg  mt-10  mx-4 "
            onClick={showModal}
          >
            Confirm Pay
          </button>
        </Form.Item>
      </Form>

      <PaymentModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default PaymentForm;
