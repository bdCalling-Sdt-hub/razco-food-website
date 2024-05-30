import React from "react";
import CommonHeading from "./CommonHeading";
import { Form, Input } from "antd";

const ProfileDetails = () => {
  return (
    <div>
      <CommonHeading title={"Personal Information :"} />
      <Form layout="vertical">
        <div className=" flex gap-4  w-full mt-5 ">
          <Form.Item
            name="name"
            className=" w-1/2 "
            label={<p className="text-[#6A6D7C] text-lg">Name:</p>}
          >
            <Input
              placeholder="Naziya Sultana Mithila"
              className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent "
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            className=" w-1/2 "
            label={<p className="text-[#6A6D7C] text-lg">Phone Number:</p>}
          >
            <Input
              placeholder="+8809979237849"
              className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent "
              size="large"
              name="phone"
            />
          </Form.Item>
        </div>

        <div className=" flex gap-4  w-full  ">
          <Form.Item
            name="email"
            className=" w-1/2 "
            label={<p className="text-[#6A6D7C] text-lg">Email:</p>}
          >
            <Input
              placeholder="esteban_schiller@gmail.com"
              className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent "
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="gander"
            className=" w-1/2 "
            label={<p className="text-[#6A6D7C] text-lg">Gander:</p>}
          >
            <Input
              placeholder="Female"
              className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent "
              size="large"
              name="password"
            />
          </Form.Item>
        </div>

        <Form.Item
          name="address"
          label={<p className="text-[#6A6D7C] text-lg">Address:</p>}
        >
          <Input
            placeholder="Dhaka , Bangladesh"
            className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent "
            size="large"
            name="address"
          />
        </Form.Item>

        <Form.Item className=" text-center ">
          <button className="bg-[#7CC84E] h-12 text-white text-lg w-1/4 mt-6  rounded  ">
            Save Changes
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileDetails;
