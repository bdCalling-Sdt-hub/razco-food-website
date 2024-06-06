import React, { useEffect } from "react";
import CommonHeading from "./CommonHeading";
import { Form, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "@/redux/apiSlice/Profile/getProfileSlice"
import { updateProfile } from "@/redux/apiSlice/Profile/updateProfileSlice";
import toast from "react-hot-toast";
const { Option } = Select;

const ProfileDetails = () => {
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
  
  const handleSubmit=(values)=>{
    const {email, ...othersValue} = values;
    dispatch(updateProfile(othersValue)).then((response)=>{
      if(response.type === "updateProfile/fulfilled"){
        toast.success(response?.payload?.message);
        dispatch(getProfile());
      }
    })

  }


  return (
    <div className=" p-5 lg:mt-2  mt-8  border border-[#DCDDDE4D] lg:p-10  ">
      <CommonHeading title={"Personal Information :"} />
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <div className=" lg:flex lg:gap-4  w-full mt-5 ">
          <Form.Item

            name="name"
            className="lg:w-1/2 w-full "
            label={
              <p className="text-[#6A6D7C] text-lg font-[poppins] ">Name:</p>
            }
          >
            <Input
              placeholder="Naziya Sultana Mithila"
              className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent font-[poppins]  "
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            className=" lg:w-1/2 w-full "
            label={<p className="text-[#6A6D7C] text-lg">Phone Number:</p>}
          >
            <Input
              placeholder="+8809979237849"
              className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent font-[poppins] "
              size="large"
              name="phone"
            />
          </Form.Item>
        </div>

        <div className=" lg:flex lg:gap-4  w-full  ">
          <Form.Item
            name="email"
            className=" lg:w-1/2 w-full "
            label={<p className="text-[#6A6D7C] text-lg">Email:</p>}
          >
            <Input
              placeholder="esteban_schiller@gmail.com"
              className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent font-[poppins] "
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="gender"
            className=" lg:w-1/2 w-full  "
            label={<p className="text-[#6A6D7C] text-lg">Gander</p>}
          >
            <Select
              placeholder="Select Gender"
              style={{
                  background: "transparent",
                  width: "100%",
                  height: 40,
                  outline: "none",
                  borderRadius: "5px",
                  color: "#555656"
              }}
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Others">Others</Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item
          name="address"
          className=" w-full "
          label={<p className="text-[#6A6D7C] text-lg">Address:</p>}
        >
          <Input
            placeholder="Dhaka , Bangladesh"
            className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent font-[poppins] "
            size="large"
            name="address"
          />
        </Form.Item>

        <Form.Item className=" text-center ">
          <button className="bg-[#7CC84E] h-12 text-white text-sm lg:text-lg lg:w-1/4 w-1/3 mt-6  rounded  font-[poppins] ">
            Save Changes
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileDetails;
