import { getProfile } from "@/redux/apiSlice/Profile/getProfileSlice";
import { Form, Input, Modal } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  editAddress } from "@/redux/apiSlice/Profile/editAddresSlice";
import toast from "react-hot-toast";

const EditAddressModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const {profile} = useSelector(state=> state.getProfile);
  const [form] = Form.useForm()

  useEffect(()=>{
    if(profile){
      form.setFieldsValue(profile)
    }
  }, [form, profile])

  useEffect(()=>{
    dispatch(getProfile());
  }, [dispatch])


  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmit=(values)=>{
    

    dispatch(editAddress(values)).then((response)=>{
      if(response.type === "editAddress/fulfilled"){
        toast.success(response?.payload?.message);
        dispatch(getProfile());
        setOpen(false);
      }
    })


  }

  return (
    <div>
      <Modal 
        open={open} 
        onCancel={handleCancel} 
        footer={false}
        title={<h1 className="text-xl text-[#7CC84E]">Edit Delivery Details</h1>}
      >
        <Form onFinish={handleSubmit} layout="vertical" form={form}>
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
              placeholder="Enter Contact number"
              className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="address"
            label={<p className="text-[#6A6D7C] text-lg">Delivery Address</p>}
          >
            <Input
              placeholder="Address"
              className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>
          <div className=" text-end">
            <button type="submit" className=" w-1/3 bg-[#7CC84E] text-white    p-2 rounded ">
              Submit
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default EditAddressModal;
