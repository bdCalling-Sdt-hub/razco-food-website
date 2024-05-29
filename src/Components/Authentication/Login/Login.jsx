import { Checkbox, Form, Input } from "antd";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="text-center mb-12  mx-auto text-[#6A6D7C]">
        <p className="mt-8 mb-6 text-xl font-semibold ">Login to Account</p>
        <p className="text-[#6A6D7C]">
          Please enter your email and password to continue
        </p>
      </div>
      <Form layout="vertical">
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
        <Form.Item>
          <div className="flex justify-between items-center text-[#6A6D7C]">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-[#6A6D7C]">Remember me</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot" href="/">
              Forgot password
            </Link>
          </div>
        </Form.Item>
        <Form.Item>
          <button className="bg-[#7CC84E] h-12 text-white text-lg w-5/6 mt-6  rounded  ms-7 ">
            Sign In
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
