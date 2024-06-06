"use client";
import React, { useState } from "react";
import { Checkbox, Form } from "antd";
import { DatePicker, TimePicker } from "antd";
import EditAddressModal from "@/Components/PaymentDetails/EditAddressModal";
import { IconCoin } from '@tabler/icons-react';


const PaymentClient = () => {
    const [open, setOpen] = useState(false);
    
    const handleSubmit=(values)=>{
        window.location.replace("/payment")
    }
    return (
        <div className="container mb-16 mt-10">
            <Form onFinish={handleSubmit} layout="vertical" className="grid grid-cols-12 gap-10">

                <div className="col-span-12  md:col-span-5  order-1 md:order-1 h-fit">
                    <p className=" text-[#7CC84E] poppins font-medium text-[24px] leading-[36px]">
                        Order No : # 77777777777
                    </p>

                    <div className=" flex items-center justify-between mt-8 mb-7">
                        <p className=" poppins font-medium text-[24px] leading-[36px] text-[#555656]">
                            Delivery Address
                        </p>

                        <button
                            className=" text-white  poppins font-normal text-[14px] leading-[14px]  bg-[#5B52A3] h-8 w-[144px] rounded-md"
                            onClick={()=>setOpen(true)}
                        >
                            Edit Address
                        </button>


                    </div>

                    <p className="text-[#929394] text-[16px] poppins leading-6 font-normal "> Name: User Name </p>
                    <p className="text-[#929394] text-[16px] poppins leading-6 font-normal "> Cnontuct No:+9900000000 </p>
                    <p className="text-[#929394] text-[16px] poppins leading-6 font-normal ">13th Street. 47 W 13th St, New York, NY 10011</p>
                    
                    <br />

                    <div  className="flex items-center justify-between gap-6">
                        <Form.Item
                            name="delivaryDate"
                            style={{width: "100%"}}
                            label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Delivary Date</p>}
                            rules={[
                                {
                                required: true,
                                message: "Please Select Future Date"
                                }
                            ]}
                        >
                            <DatePicker style={{width: "100%"}} />
                        </Form.Item>

                        <Form.Item
                            name="delivaryTime"
                            style={{width: "100%"}}
                            label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Delivary Time</p>}
                            rules={[
                                {
                                required: true,
                                message: "Please Choose Your Pickup Time"
                                }
                            ]}
                        >
                            <TimePicker style={{width: "100%"}}/>
                        </Form.Item>
                        
                        
                    </div>
                </div>

                <div className="col-span-12 md:col-span-7   order-2 md:order-2">

                <Form.Item
                    name="paymentType"
                    label={<p className="text-[#6A6D7C] poppins text-[16px] leading-[27px] font-normal ">Payment Option</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Choose Payment Type"
                        }
                    ]}
                    style={{ margin: "0 0 12px 0"}}
                >

                    <Checkbox.Group style={{width: "100%", backgroundColor: "#dbdbdd", padding: 12, borderRadius: 8, }}>
                        <div className="w-full  flex items-center justify-between bg-white p-2 mb-2 rounded  text-[#6E6E6F]">
                            <span className="text-[16px] text-[#6E6E6F] poppins leading-6 font-medium">Card</span> <Checkbox  value="card"/>
                        </div>

                        <div className="w-full  flex items-center justify-between bg-white p-2 rounded  text-[#6E6E6F]">
                            <span className="text-[16px] text-[#6E6E6F] poppins leading-6 font-medium">Cash On Delivary</span> <Checkbox  value="cash"/>
                        </div>
                    </Checkbox.Group>
                </Form.Item>

                <Form.Item
                    name="pickup"
                >
                    <Checkbox value={"curb"} /> <span className="poppins text-[16px] leading-6 text-secondary ml-3">Request Curbside Pickup</span>
                </Form.Item>

                <p className="flex items-center text-secondary poppins justify-between text-[24px] leading-6 font-medium mb-4">
                    Subtotal Amount<span > $545.00 </span>
                </p>

                <p className=" flex items-center text-secondary poppins justify-between text-[24px] leading-6 font-medium">
                    Delivery Fee <span> $55.00 </span>
                </p>
                <hr className="my-6" />
                <p className="flex items-center text-secondary poppins justify-between text-[24px] leading-6 font-medium">
                    Total Amount<span > $600.00 </span>
                </p>
                <p className="text-[16px] leading-4 font-normal flex items-center gap-1 poppins text-[#5B52A3] mt-3 ">
                    You will earn <IconCoin color="#FF9A38" />  160 Points
                </p>

                    <Form.Item style={{marginTop: 16}}>
                    <button type="submit" className="poppins bg-[#7CC84E] text-white w-full  p-2 rounded ">Payment</button>
                    </Form.Item>
                </div>

            </Form>
            <EditAddressModal open={open} setOpen={setOpen} />
        </div>
    );
};

export default PaymentClient;