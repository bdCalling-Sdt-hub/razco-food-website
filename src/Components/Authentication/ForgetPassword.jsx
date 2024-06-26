import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "@/redux/apiSlice/Authentication/forgotPasswordSlice";
import toast from "react-hot-toast";

const ForgetPassword = ({setTab}) => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state=> state.forgotPassword);

  const handleSubmit=(values)=>{
    localStorage.setItem("email", values?.email)
    dispatch(forgotPassword(values)).then((response)=>{
      if(response.type === "forgotPassword/fulfilled"){
        toast.success("Send OTP")
        setTab("otp")
      }else{
        toast.error(response?.payload?.message)
      }
    })
  }
  return (
    <div className=" ">
      <div className="text-center mb-12">
        <p className="mt-8 mb-6 poppins text-[32px] leading-[48px] font-medium text-[#6E6E6F]">
          Forget Password
        </p>
      </div>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="email"
          label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Email Address</p>}
        >
          <Input
            placeholder="esteban_schiller@gmail.com"
            className="bg-[#F1F4F9] border text-[#B7B8B9] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <button type="submit" className="bg-[#7CC84E] h-12 text-white text-lg w-full mt-6  rounded  ">
            Send
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgetPassword;
