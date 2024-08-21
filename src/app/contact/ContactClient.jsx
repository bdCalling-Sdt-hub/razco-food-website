"use client";
import React, { useEffect } from "react";
import phone from "@/assets/phone.png";
import mail from "@/assets/mail.png";
import Image from "next/image";
import { Button, Form, Input } from "antd";
import { getContactUs } from "@/redux/apiSlice/getContactUs"
import { useDispatch, useSelector } from "react-redux";

const ContactClient = () => {
    const dispatch = useDispatch()
    const { contact } = useSelector(state=> state.getContact);

    useEffect(()=>{
        dispatch(getContactUs())
    }, [dispatch])

    return (
        <div className="container grid grid-cols-12 my-16">
            <div className="col-span-12 md:col-span-4 h-fit grid grid-cols-1 gap-6  order-2 md:order-1">
                <div className="">
                <div className=" flex items-center gap-2 ">
                    {" "}
                    <Image src={phone} height={14} width={38} alt="" />{" "}
                    <span className=" text-2xl font-medium text-[#575757] ">
                    Call To Us
                    </span>
                </div>
                <p className=" text-lg text-[#575757] py-4"> +559-562-5900 </p>
                </div>

                <div className=" ">
                <div className=" flex items-center gap-2 ">
                    {" "}
                    <Image src={mail} height={14} width={38} alt="" />{" "}
                    <span className=" text-2xl font-medium text-[#575757] ">
                    Write To Us
                    </span>
                </div>
                <p className=" text-lg text-[#575757] py-4">
                    {" "}
                    coustmercare@razcofoods.net
                </p>
                </div>

                {/* <div className="">
                <div className=" flex items-center gap-2 ">
                    {" "}
                    <Image src={location} height={14} width={38} alt="" />{" "}
                    <span className=" text-2xl font-medium text-[#575757] ">
                    Visit Our Location
                    </span>
                </div>
                <p className=" text-lg text-[#575757] py-4">
                    Head Office : AAA/7 ,Area R/A
                </p>
                <p className=" text-lg text-[#575757] pb-4">
                    Branch 1 : 23/A , Area, City{" "}
                </p>
                <p className=" text-lg text-[#575757] pb-4">
                    Branch 1 : 23/A , Area, City{" "}
                </p>
                </div> */}
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
                    label="Full Name"
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
                    label="Email"
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
                    label="Phone"
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
                    label="Message"
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

export default ContactClient;
