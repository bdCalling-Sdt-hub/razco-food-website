"use client";
import React, { useState } from "react";
import { Checkbox } from "antd";
import { DatePicker, TimePicker, Select, Space } from "antd";
import Link from "next/link";
import EditAddressModal from "@/Components/PaymentDetails/EditAddressModal";

const { Option } = Select;
const PickerWithType = ({ type, onChange }) => {
  if (type === "time") return <TimePicker onChange={onChange} />;
  if (type === "date") return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

const page = () => {
  const [type, setType] = useState("time");
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="container mb-16 mt-10">


      <div className="grid grid-cols-12 gap-10">

        <div className="col-span-12  md:col-span-5  order-1 md:order-1">
          <p className=" text-[#7CC84E] text-lg font-medium">
            {" "}
            Order No : # 77777777777{" "}
          </p>

          <div className=" flex justify-between lg:mt-7">
            <p className=" text-xl font-medium text-[#555656]">
              {" "}
              Delivery Address{" "}
            </p>
            <button
              className=" text-white rounded p-2 bg-[#5B52A3] px-2"
              onClick={showModal}
            >
              {" "}
              Edit Address
            </button>
          </div>

          <p className="text-[#929394] text-sm pt-3"> Name: User Name </p>
          <p className="text-[#929394] text-sm pt-3"> Cnontuct No:+9900000000 </p>
          <p className="text-[#929394] text-sm pt-3">
            {" "}
            13th Street. 47 W 13th St, New York, NY 10011{" "}
          </p>
        

          <div>
            <div>
              <p className="text-[#929394] text-sm pt-3 pb-2"> Delivery Date </p>
              <DatePicker onChange={onChange} needConfirm />
            </div>

            <div>
              <p className="text-[#929394] text-sm pt-3 pb-2"> Delivery Time</p>
              <Space>
                <Select value={type} onChange={setType}>
                  <Option value="time">Time</Option>
                  <Option value="date">Date</Option>
                  <Option value="week">Week</Option>
                  <Option value="month">Month</Option>
                  <Option value="quarter">Quarter</Option>
                  <Option value="year">Year</Option>
                </Select>
                <PickerWithType
                  type={type}
                  onChange={(value) => console.log(value)}
                />
              </Space>
            </div>
          </div>
        </div>


        <div className="col-span-12 md:col-span-7   order-2 md:order-2">
          <p className=" text-[#555656] font-medium pb-3 text-lg ">
            Payment Option
          </p>
          <div className=" bg-[#dbdbdd] p-2 lg:mb-20">
            <p className=" flex items-center justify-between bg-white p-2 mb-2 rounded  text-[#6E6E6F]">
              {" "}
              <span> Card </span> <Checkbox onChange={onChange}></Checkbox>{" "}
            </p>

            <p className=" flex items-center justify-between bg-white p-2 rounded  text-[#6E6E6F]">
              {" "}
              <span>Cash on Delivery</span>{" "}
              <Checkbox onChange={onChange}></Checkbox>{" "}
            </p>
          </div>

          <p className=" flex justify-between px-3 mt-4">
            <span className=" text-lg font-medium  text-[#555656] ">
              {" "}
              Subtotal Amount{" "}
            </span>
            <span className=" text-lg font-medium text-[#555656]"> $545.00 </span>
          </p>

          <p className=" flex justify-between px-3 mt-4 mb-3">
            <span className=" text-lg font-medium  text-[#555656] ">
              {" "}
              Delivery Fee{" "}
            </span>
            <span className=" text-lg font-medium text-[#555656]"> $55.00 </span>
          </p>
          <p className="border-b border-[#DCDDDE] ps-3 "></p>

          <p className=" flex justify-between px-3 mt-2">
            <span className=" text-lg font-medium  text-[#555656] ">
              {" "}
              Total Amount{" "}
            </span>
            <span className=" text-lg font-medium text-[#555656]"> $600.00 </span>
          </p>
          <p className="text-sm text-[#6E6E6F] px-3 mt-3 ">
            You will earn 160 Points
          </p>

          <div className="  text-center my-6 ">
            <Link href="/payment">
              <button className=" bg-[#7CC84E] text-white w-full  p-2 rounded ">
                {" "}
                Payment
              </button>
            </Link>
          </div>
        </div>

      </div>
        <EditAddressModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default page;
