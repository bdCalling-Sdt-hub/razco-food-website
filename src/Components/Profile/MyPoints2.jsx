import React from "react";
import CommonHeading from "./CommonHeading";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Coupon name",
    dataIndex: "name",
    key: "name",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Points",
    dataIndex: "Points",
    key: "Points",
  },
  {
    title: "Coupon code",
    key: "CouponCode",
    dataIndex: "CouponCode",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    date: "Date:  20-Feb-2024",
    Points: "2k",
    CouponCode: "Eid24",
  },
  {
    key: "2",
    name: "Jim Green",
    date: "Date:  20-Feb-2024",
    Points: "2k",
    CouponCode: "Eid24",
  },
];

const MyPoints2 = () => {
  return (
    <div className=" border border-[#DCDDDE4D] lg:p-10 ">
      <CommonHeading title={"My Points"} />
      <h2 className="bg-[#7CC84E] p-2 text-white text-lg w-full mt-6  rounded  mb-6 ">
        Coupon Store
      </h2>

      <div>
        <Table columns={columns} dataSource={data} className="border-b-0" />
      </div>
    </div>
  );
};

export default MyPoints2;
