import { Button, Form, Input } from "antd";
import React from "react";

const ResetPassword = ({setTab}) => {
  return (
    <div className=" ">
      <div className="text-center mb-4 mt-16 ">
        <p className=" mt-8 mb-3 poppins text-[32px] leading-[48px] font-medium text-[#6E6E6F]">
          Set a new password
        </p>
        <p className="text-[#929394] mb-10  poppins text-[16px] leading-[24px] font-normal ">
          Create a new password. Ensure it differs from previous ones for
          security
        </p>
      </div>
      <Form layout="vertical">
        <Form.Item
          name="password"
          label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal">New password</p>}
          rules={[
            {
              required: true,
              message: "Please Enter The New Password"
            }

          ]}
        >
          <Input.Password
            placeholder="Write new password"
            className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
            size="large"
            name="password"
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal">Confirm Password</p>}
          rules={[
            {
              required: true,
              message: "Please Enter The Confirm Password"
            }

          ]}
        >
          <Input.Password
            placeholder="Write confirm password"
            className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
            size="large"
            name="password"
          />
        </Form.Item>

        <Form.Item>
          <Button
                onClick={()=>setTab("login")}
                htmlType="submit"
                style={{
                  width: "100%",
                  background: "#7CC84E",
                  height: 48,
                  border: "none",
                  outline: "none",
                  color: "white"
                }}
              >
                Sign In
              </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ResetPassword;
