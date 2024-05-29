"use client";
import React from "react";
import { Collapse, Space } from "antd";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const FAQ = () => {
  return (
    <div className="lg:ps-[270px] lg:pe-[250px]  lg:mt-32 lg:mb-24 mb-5 mt-5">
      <h1 className="  lg:text-5xl text-center font-bold text-[#555656] lg:mb-14">
        Frequently Asked Questions
      </h1>
      <Space direction="vertical">
        <Collapse
          collapsible="header"
          className="p-3  "
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: (
                <p className="lg:text-lg  ">
                  {" "}
                  Do you offer online shopping and home delivery?{" "}
                </p>
              ),
              children: <p className=" lg:text-lg">{text}</p>,
            },
          ]}
        />

        <Collapse
          collapsible="icon"
          className="p-3 "
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: (
                <p className="lg:text-lg  ">
                  {" "}
                  Do you carry organic or gluten-free products?{" "}
                </p>
              ),
              children: <p className=" lg:text-lg">{text}</p>,
            },
          ]}
        />

        <Collapse
          collapsible="icon"
          className="p-3 "
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: (
                <p className="lg:text-lg  ">
                  {" "}
                  Can I place a special order for a product you don’t usually
                  carry?{" "}
                </p>
              ),

              children: <p className=" lg:text-lg"> {text}</p>,
            },
          ]}
        />

        <Collapse
          collapsible="icon"
          className="p-3 "
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: (
                <p className="lg:text-lg  ">
                  {" "}
                  Can I use multiple coupons in one transaction?{" "}
                </p>
              ),
              children: <p className=" lg:text-lg">{text}</p>,
            },
          ]}
        />
      </Space>
    </div>
  );
};

export default FAQ;
