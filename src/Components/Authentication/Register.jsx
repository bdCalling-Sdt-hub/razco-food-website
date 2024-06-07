import useEmailVerifyModal from "@/hooks/useEmailVerifyModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { UserContext } from "@/provider/User";
import { register } from "@/redux/apiSlice/Authentication/registerSlice";
import { getProfile } from "@/redux/apiSlice/Profile/getProfileSlice";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Register = ({onToggle}) => {
  const registerModal = useRegisterModal();
  const emailVerifyModal = useEmailVerifyModal();
  const dispatch = useDispatch();
  const {loading} = useSelector(state=> state.register);

  const handleSubmit=(values)=>{
    dispatch(register(values)).then((response)=>{
      localStorage.setItem("email", values?.email)
      if(response.type === "register/fulfilled"){
        toast.success(response?.payload?.message)
        registerModal.onClose();
        emailVerifyModal.onOpen();
      }else{
        toast.error(response?.payload)
      }
    })
  }


  return (
    <div>
      <div className="text-center mb-12  mx-auto text-[#6A6D7C]">
        <p className="mt-8 mb-2 poppins text-[32px] leading-[48px] font-medium text-[#6E6E6F]">
          Register a new account
        </p>
        <p className="text-[#6A6D7C] poppins text-[14px] leading-[28px] font-normal ">
          Please enter your information to create account
        </p>
      </div>


      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="name"
          label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Full name</p>}
          rules={[
            {
              required: true,
              message: "Please Enter Your Name!"
            }
          ]}
        >
          <Input
            placeholder="Write Your Name"
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
          label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Email</p>}
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
          name="phone"
          label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Contact no</p>}
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
          label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Password</p>}
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
            { loading ? "Loading..." : "Sign Up"}
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
