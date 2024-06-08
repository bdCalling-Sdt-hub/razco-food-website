import React, { useEffect } from "react";
import CommonHeading from "./CommonHeading";
import { Modal, Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getMyCoupon } from "@/redux/apiSlice/Coupon/getMyCouponSlice";


const columns = [
  {
    title: "Coupon Code",
    dataIndex: "couponCode",
    key: "couponCode",
  },
  {
    title: "Date",
    dataIndex: "expireDate",
    key: "expireDate",
  },
  {
    title: "Points",
    dataIndex: "points",
    key: "points",
  }
];


const CouponModal = ({ isModalOpen, setIsModalOpen }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();
  const {myCoupons} = useSelector(state=> state.myCoupons);

  useEffect(()=>{
    dispatch(getMyCoupon())
  }, [dispatch]);


  return (
    <Modal open={isModalOpen} onCancel={handleCancel} footer={false} width={600}>
      <div className=" lg:p-2 mt-2 ">
        <h2 className="bg-[#7CC84E] p-2 text-white text-lg w-full mt-6  rounded  mb-6 font-[poppins] ">
          Coupon Store
        </h2>

        <div>
          <Table
            columns={columns}
            dataSource={myCoupons}
            className="border-b-0 font-[poppins]"
            pagination={false}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CouponModal;
