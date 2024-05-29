import { Form, Input, Modal } from "antd";
import React from "react";

const EditAddressModal = ({ open, setOpen }) => {
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onCancel={handleCancel} footer={false}>
        <h1 className="text-xl mt-12 mb-6 text-[#7CC84E]">
          Edit Delivery Details
        </h1>
        <Form layout="vertical">
          <Form.Item
            name="name"
            label={<p className="text-[#6A6D7C] text-lg ">Full Name</p>}
          >
            <Input
              placeholder="Enter full name"
              className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label={<p className="text-[#6A6D7C] text-lg">Contact Number</p>}
          >
            <Input
              placeholder="Enter admin email"
              className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="email"
            label={<p className="text-[#6A6D7C] text-lg">Delivery Address</p>}
          >
            <Input
              placeholder="Admin"
              className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>
          <div className=" text-end">
            <button className=" w-1/3 bg-[#7CC84E] text-white    p-2 rounded ">
              Submit
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default EditAddressModal;
