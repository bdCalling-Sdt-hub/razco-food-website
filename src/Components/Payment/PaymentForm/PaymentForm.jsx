"use client";
import React, { useState } from "react";
import { Form } from "antd";
import "./style.css";
import PaymentModal from "../PaymentModal/PaymentModal";
const PaymentForm = () => {
  const [open, setOpen] = useState(false);
  
  const handleSubmit=(values)=>{
    setOpen(true)
  }

  return (
    <div className="w-2/3 mx-auto lg:mb-20 mb-5 payment">
      <Form 
        layout="vertical" 
        className="grid grid-cols-12 gap-4"
        onFinish={handleSubmit}
      >

        <Form.Item
          name="card_number"
          style={{marginBottom: 0}}
          label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal pb-0">Card Number</p>}
          className="col-span-12"
          rules={[
            {
              required: true,
              message: "Please Choose Your Pickup Time"
            }
          ]}
        >
          <input type="text" className="border-b-[1px] poppins pb-1 border-[#949494] border-opacity-[24%]  w-full outline-none" />
        </Form.Item>

        <Form.Item
          name="validity_date"
          style={{marginBottom: 0}}
          label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Validity Date</p>}
          className="col-span-6"
          rules={[
            {
              required: true,
              message: "Please Choose Your Pickup Time"
            }
          ]}
        >
          <input type="text" className="border-b-[1px] poppins pb-1 border-[#949494] border-opacity-[24%]  w-full outline-none" />
        </Form.Item>

        <Form.Item
          name="cvc"
          style={{marginBottom: 0}}
          label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">CVC</p>}
          className="col-span-6"
          rules={[
            {
              required: true,
              message: "Please Choose Your Pickup Time"
            }
          ]}
        >
          <input type="text" className="border-b-[1px] poppins pb-1 border-[#949494] border-opacity-[24%]  w-full outline-none" />
        </Form.Item>

        <Form.Item
          name="name"
          style={{marginBottom: 0}}
          label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Cardholder Name</p>}
          className="col-span-12"
          rules={[
            {
              required: true,
              message: "Please Choose Your Pickup Time"
            }
          ]}
        >
          <input type="text"className="border-b-[1px] poppins pb-1 border-[#949494] border-opacity-[24%]  w-full outline-none" />
        </Form.Item>

        <Form.Item
          name="email"
          style={{marginBottom: 0}}
          label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Cardholder Email</p>}
          className="col-span-12"
          rules={[
            {
              required: true,
              message: "Please Choose Your Pickup Time"
            }
          ]}
        >
          <input type="text" className="border-b-[1px] poppins pb-1 border-[#949494] border-opacity-[24%]  w-full outline-none" />
        </Form.Item>

        <Form.Item className="col-span-12" style={{marginTop: 10}}>
          <button type="submit" className="bg-[#7CC84E] h-12 text-white text-lg w-full   rounded-lg">
            Confirm Pay
          </button>
        </Form.Item>
      </Form>

      <PaymentModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default PaymentForm;
