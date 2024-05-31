"use client";
import React from "react";
import phone from "@/assets/phone.png";
import mail from "@/assets/mail.png";
import location from "@/assets/location.png";
import Image from "next/image";
import { Button, Form, Input } from "antd";

const page = () => {
  return (
    <div className="container grid grid-cols-12 my-16">


      <div className="col-span-12 md:col-span-4 h-fit grid grid-cols-1 gap-6  order-2 md:order-1">
        <div className="">
          <div className=" flex items-center gap-2 mb-6">
            <Image src={phone} height={14} width={38} alt="" />{" "}
            <span className=" font-medium text-[16px] leading-6 text-[#575757] ">
              Call To Us
            </span>
          </div>
          <p className="font-normal text-[14px] leading-[21px] text-[#707070] mb-2"> Phone: +9999999999 </p>
          <p className=" font-normal text-[14px] leading-[21px] text-[#707070]">Phone: +9999999999 </p>
        </div>

        <div className=" ">
          <div className=" flex items-center gap-2 mb-6">
            <Image src={mail} height={14} width={38} alt="" />{" "}
            <span className=" font-medium text-[16px] leading-6 text-[#575757] ">
              Write To Us
            </span>
          </div> 
          <p className="font-normal text-[14px] leading-[21px] text-[#707070] mb-2">Emails: xxxxxxx@gmail.com</p>
          <p className="font-normal text-[14px] leading-[21px] text-[#707070]">Emails: xxxxxxx@gmail.com</p>
        </div>
      </div>

      <div className="col-span-12 md:col-span-8 order-1 md:order-2">
        <Form layout="vertical" className="grid grid-cols-12 gap-3">
          <Form.Item
            name="name"
            className="col-span-6"
            rules={[
              {
                required: true,
                message: "Please Enter Name",
              },
            ]}
            label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Full Name</p>}
            style={{marginBottom: 0}}
          >
            <Input
                placeholder="Enter Your Full Nname"
                style={{
                  background: "#F1F4F9",
                  height: 48,
                  border: "none",
                  outline: "none"
                }}
              />
          </Form.Item>

          <Form.Item
          style={{marginBottom: 0}}
            name="email"
            className="col-span-6"
            rules={[
              {
                required: true,
                message: "Please Enter Email",
              },
            ]}
            label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Email</p>}
          >
            <Input
                placeholder="Please Enter Email"
                style={{
                  background: "#F1F4F9",
                  height: 48,
                  border: "none",
                  outline: "none"
                }}
              />
          </Form.Item>

          <Form.Item
            name="mobile_number"
            className="col-span-12"
            style={{marginBottom: 0}}
            rules={[
              {
                required: true,
                message: "Please Enter Mobile Number",
              },
            ]}
            label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Phone</p>}
          >
            <Input
              placeholder="Please Enter Mobile Number"
              style={{
                background: "#F1F4F9",
                height: 48,
                border: "none",
                outline: "none",
              }}
            />
          </Form.Item>


          <Form.Item
            name="message"
            className="col-span-12"
            rules={[
              {
                required: true,
                message: "Please Enter Message",
              },
            ]}
            style={{marginBottom: 0}}
            label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Message</p>}
          >
            <Input.TextArea
              placeholder="Message..."
              style={{
                background: "#F1F4F9",
                height: 120,
                border: "none",
                outline: "none",
              }}
            />
          </Form.Item>

          <Form.Item
            className="col-span-12"
          >
            <Button
              htmlType="submit"
              style={{
                width: "100%",
                background: "#7CC84E",
                height: 48,
                border: "none",
                outline: "none",
                color: "white",
              }}
            >
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default page;
