import React from "react";
import CommonHeading from "./CommonHeading";
import { Modal, Space, Table, Tag } from "antd";
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

const CouponModal = ({ isModalOpen, setIsModalOpen }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal open={isModalOpen} onCancel={handleCancel} footer={false}>
      <div className=" lg:p-2 mt-2 ">
        <h2 className="bg-[#7CC84E] p-2 text-white text-lg w-full mt-6  rounded  mb-6 font-[poppins] ">
          Coupon Store
        </h2>

        <div>
          <Table
            columns={columns}
            dataSource={data}
            className="border-b-0 font-[poppins]"
          />
        </div>
      </div>
    </Modal>
  );
};

export default CouponModal;
