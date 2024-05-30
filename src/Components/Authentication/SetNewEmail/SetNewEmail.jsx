import { Form, Input } from "antd";
import React from "react";

const SetNewEmail = () => {
  return (
    <div className=" ">
      <div className="text-center mb-4 mt-16 ">
        <p className=" mt-8 mb-6 text-xl font-semibold text-[#6E6E6F] ">
          Set a new password
        </p>
        <p className="text-[#929394] mt-6 mb-10">
          Create a new password. Ensure it differs from previous ones for
          security
        </p>
      </div>
      <Form layout="vertical">
        <Form.Item
          name="password"
          label={<p className="text-[#6A6D7C] text-lg ">New password</p>}
        >
          <Input.Password
            placeholder="Write new password"
            className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent mb-5"
            size="large"
            name="password"
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label={<p className="text-[#6A6D7C] text-lg ">Confirm Password</p>}
        >
          <Input.Password
            placeholder="Write confirm password"
            className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
            size="large"
            name="password"
          />
        </Form.Item>

        <Form.Item>
          <button className="bg-[#7CC84E] h-12 text-white text-lg w-full   rounded-lg  mt-14 ">
            Reset Password
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SetNewEmail;
