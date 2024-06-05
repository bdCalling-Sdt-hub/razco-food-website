import React from "react";
import CommonHeading from "./CommonHeading";
import { Form, Input } from "antd";

const Settings = () => {
  return (
    <div className="p-5 lg:mt-2  mt-8 border border-[#DCDDDE4D] lg:p-10 ">
      <CommonHeading title={"Change Password "} />
      <Form layout="vertical">
        <Form.Item
          name="password"
          label={
            <p className="text-[#6A6D7C] text-lg lg:mt-6 font-[poppins]">
              Current Password
            </p>
          }
        >
          <Input.Password
            placeholder="Enter Your Password"
            className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent font-[poppins]"
            size="large"
            name="currentPassword"
          />
        </Form.Item>

        <Form.Item
          name="newPassword"
          label={
            <p className="text-[#6A6D7C] text-lg font-[poppins]">
              New Password
            </p>
          }
        >
          <Input.Password
            placeholder="Enter Your New Password"
            className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent font-[poppins] "
            size="large"
            name="newPassword"
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label={
            <p className="text-[#6A6D7C] text-lg font-[poppins]">
              Confirm New Password
            </p>
          }
        >
          <Input.Password
            placeholder="Enter Your New Password"
            className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent font-[poppins] "
            size="large"
            name="ConfirmPassword"
          />
        </Form.Item>

        <Form.Item className="">
          <button className="bg-[#7CC84E] h-12 text-white lg:text-lg text-sm w-1/3 lg:w-1/4 mt-6  rounded font-[poppins] ">
            Save Changes
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Settings;
