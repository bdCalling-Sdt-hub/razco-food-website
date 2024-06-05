import React from "react";
import CommonHeading from "./CommonHeading";
import { Form, Input } from "antd";
const { TextArea } = Input;

const FeedBack = () => {
  return (
    <div className="p-5 lg:mt-2  mt-8 font-[poppins] border border-[#DCDDDE4D] lg:p-10 ">
      <CommonHeading title={"Feedback:"} />
      <div className="lg:mx-auto mx-2 lg:w-1/2 w-full  ">
        <Form layout="vertical">
          <Form.Item
            name="name"
            label={
              <p className="text-[#6A6D7C] text-lg font-[poppins]">Name:</p>
            }
          >
            <Input
              placeholder="Mithila "
              className="bg-[#2E3C43] border text-[#6A6D7C] border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent "
              size="large"
              name="name"
            />
          </Form.Item>

          <Form.Item
            name="name"
            label={
              <p className="text-[#6A6D7C] text-lg font-[poppins]">
                Description:
              </p>
            }
          >
            <TextArea
              rows={4}
              placeholder="Ex. what is the feedback about us.... "
              maxLength={9}
            />
          </Form.Item>

          <div className=" flex gap-3 items-center  justify-end mt-6">
            <button className=" bg-[#7CC84E] p-2 text-white text-lg  lg:w-1/4 w-1/3 font-[poppins]    rounded-lg">
              Cancel
            </button>
            <button className="  p-2 text-[#7CC84E] text-lg  lg:w-1/4 border border-[#7CC84E] w-1/3 font-[poppins] rounded-lg">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FeedBack;
