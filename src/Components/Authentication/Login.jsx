import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import React, { useContext, useState } from "react";
import ForgetPassword from "./ForgetPassword";
import OtpVerify from "./OtpVerify";
import ResetPassword from "./ResetPassword";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/apiSlice/Authentication/loginSlice";
import toast from "react-hot-toast";
import { getProfile } from "@/redux/apiSlice/Profile/getProfileSlice";
import { UserContext } from "@/provider/User";
import useLoginModal from "@/hooks/useLoginModal";

const Login = ({onToggle}) => {
  const [tab, setTab] = useState("login");
  const { setUser } = useContext(UserContext);
  const loginModal = useLoginModal();

  const dispatch = useDispatch();
  const {loading} = useSelector(state=> state.login);

  const handleSubmit=(values)=>{
    dispatch(login(values)).then((response)=>{
      if(response.type === "login/fulfilled"){
        localStorage.setItem("token", JSON.stringify(response?.payload))
        dispatch(getProfile()).then((res)=>{
          if(res.type  === "getProfile/fulfilled"){
            toast.success("Logged In successfully")
            setUser(res.payload)
            loginModal.onClose();
            window.location.reload()
          }
        })
      }
      if(response.type === "login/rejected"){
        toast.error(response?.payload)
      }

    })
  }


  return (
    <div>

      {
        tab === "login"
        &&
        <>
          <div className="text-center my-12  mx-auto text-[#6A6D7C]">
            <p className="poppins text-[32px] leading-[48px] font-medium mb-2 text-[#6E6E6F]">Login to Account</p>
            <p className="text-[#6A6D7C] poppins text-[17px] leading-[27px] font-normal ">
              Please enter your email and password to continue
            </p>
          </div>
          <Form 
            layout="vertical"
            onFinish={handleSubmit}
          >
            
            <Form.Item
              name="email"
              label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Email Address</p>}
              rules={[
                {
                  required: true,
                  message: "Please Enter Your Email!"
                }
              ]}
            >
              <Input
                placeholder="esteban_schiller@gmail.com"
                type="email"
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
                  message: "Please Enter Your Password!"
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
                name="password"
              />
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please Select Remember Me!"
                }
              ]}
            >
              <div className="flex justify-between items-center text-[#6A6D7C]">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox className="text-[#6A6D7C]  poppins text-[16px] leading-[24px] opacity-[60%] font-normal ">Remember me</Checkbox>
                </Form.Item>

                <p className="text-[#6A6D7C] cursor-pointer poppins text-[15px] leading-[27px] font-normal" onClick={()=>setTab("forgot")}>
                  Forgot password
                </p>
              </div>
            </Form.Item>


            <Form.Item >
              <Button
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
                { loading ? "Loading..." : "Sign Up"}
              </Button>
          </Form>
        </>
      }

      { tab === "forgot" && <ForgetPassword setTab={setTab} /> }
      { tab === "otp" && <OtpVerify setTab={setTab}  /> }
      { tab === "reset" && <ResetPassword setTab={setTab}  /> }
    </div>
  );
};

export default Login;
