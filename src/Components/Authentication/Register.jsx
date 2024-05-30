import { Checkbox, Form, Input } from "antd";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div>
      <div className="text-center mb-12  mx-auto text-[#6A6D7C]">
        <p className="mt-8 mb-6 text-xl font-semibold ">
          Register a new account
        </p>
        <p className="text-[#6A6D7C]">
          Please enter your information to create account
        </p>
      </div>
      <Form layout="vertical">
        <Form.Item
          name="name"
          label={<p className="text-[#6A6D7C] text-lg">User name</p>}
        >
          <Input
            placeholder="write your name"
            className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label={<p className="text-[#6A6D7C] text-lg">Email Address</p>}
        >
          <Input
            placeholder="esteban_schiller@gmail.com"
            className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label={<p className="text-[#6A6D7C] text-lg">Contact no</p>}
        >
          <Input
            placeholder="+8800000"
            className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="password"
          label={<p className="text-[#6A6D7C] text-lg">Password</p>}
        >
          <Input.Password
            placeholder="Enter Your Password"
            className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
            size="large"
            name="password"
          />
        </Form.Item>
        <Form.Item></Form.Item>
        <Form.Item>
          <button className="bg-[#7CC84E] h-12 text-white text-lg w-5/6 mt-6  rounded  ms-7 ">
            Sign Up
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
