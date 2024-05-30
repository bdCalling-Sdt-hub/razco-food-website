import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import React from "react";

const Register = ({onToggle}) => {

  const handleSubmit=(values)=>{
    console.log("Received Values", values)
  }
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


      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="name"
          label={<p className="text-[#6A6D7C] text-lg">User name</p>}
          rules={[
            {
              required: true,
              message: "Please Enter User Name!"
            }
          ]}
        >
          <Input
            placeholder="write your name"
            style={{
              background: "#F1F4F9",
              height: 48,
              border: "none",
              outline: "none"
            }}   
          />
        </Form.Item>

        <Form.Item
          name="email"
          label={<p className="text-[#6A6D7C] text-lg">Email</p>}
          rules={[
            {
              required: true,
              message: "Please Enter Your Email!"
            }
          ]}
        >
          <Input
            placeholder="esteban_schiller@gmail.com"
            style={{
              background: "#F1F4F9",
              height: 48,
              border: "none",
              outline: "none"
            }}
          />
        </Form.Item>

        <Form.Item
          name="email"
          label={<p className="text-[#6A6D7C] text-lg">Contact no</p>}
          rules={[
            {
              required: true,
              message: "Please Enter Your Contact Number"
            }
          ]}
        >
          <Input
            placeholder="+8800000"
            style={{
              background: "#F1F4F9",
              height: 48,
              border: "none",
              outline: "none"
            }}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label={<p className="text-[#6A6D7C] text-lg">Password</p>}
          rules={[
            {
              required: true,
              message: "Please Enter Password"
            }
          ]}
        >
          <Input.Password
            placeholder="Enter Your Password"
            style={{
              background: "#F1F4F9",
              height: 48,
              border: "none",
              outline: "none"
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button 
            htmlType="submit"
            style={{
              width: "100%",
              background: "#7CC84E",
              color: "white",
              height: 48,
              border: "none",
              outline: "none"
            }}
          >
            Sign Up
          </Button>
        </Form.Item>

        <Button
          onClick={onToggle}
            style={{
              width: "100%",
              background: "white",
              height: 48,
              border: "1px solid #7CC84E",
              outline: "none",
              color: "#7CC84E"
            }}
          >
            Log In
          </Button>
      </Form>


    </div>
  );
};

export default Register;
