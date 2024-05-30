import React from "react";
import { Button, Form, Input } from "antd";

const ForgetPassword = ({setTab}) => {
  return (
    <div className=" ">
      <div className="text-center mb-12">
        <p className="mt-8 mb-6 text-xl font-semibold text-[#6A6D7C] ">
          Forget Password
        </p>
      </div>
      <Form layout="vertical">
        <Form.Item
          name="email"
          label={<p className="text-[#929394] text-lg">Email Address</p>}
        >
          <Input
            placeholder="esteban_schiller@gmail.com"
            className="bg-[#F1F4F9] border text-[#B7B8B9] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <button onClick={()=>setTab("otp")} className="bg-[#7CC84E] h-12 text-white text-lg w-full mt-6  rounded  ">
            Send
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgetPassword;
