import Image from "next/image";
import React from "react";
import img1 from "@/assets/fruit1.png";
import img2 from "@/assets/fruit2.png";
import img3 from "@/assets/offer.png";
import { CloseOutlined } from "@ant-design/icons";
const products = [
  {
    key: 1,
    img: <Image src={img1} height={40} width={90} alt=" " />,
    title: " Tamato",
    price: "$12",
  },
  {
    key: 2,
    img: <Image src={img2} height={40} width={90} alt=" " />,
    title: " Orange",
    price: "$15",
  },
  {
    key: 3,
    img: <Image src={img3} height={40} width={90} alt=" " />,
    title: " Apple",
    price: "$18",
  },
  {
    key: 4,
    img: <Image src={img1} height={40} width={90} alt=" " />,
    title: " Tamato",
    price: "$12",
  },
  {
    key: 5,
    img: <Image src={img2} height={40} width={90} alt=" " />,
    title: " Orange",
    price: "$15",
  },
];
const Summary = () => {
  return (
    <div className=" bg-[#F8F8FC] p-4 ">
      <h4 className=" text-[#555656]  text-lg  font-semibold"> Summary </h4>
      {products.map((product) => (
        <div
          key={product.key}
          className=" flex items-center justify-between p-4 ps-5"
        >
          <p> {product.img}</p>
          <div>
            <p className="text-[#555656] text-lg font-medium ">
              {" "}
              {product.title}{" "}
            </p>
            <p className="text-[#524A93]"> 12*5qty=60</p>
          </div>
          <p className="text-[#70B446] text-2xl font-semibold">
            {" "}
            {product.price}
          </p>
          <p>
            {" "}
            <CloseOutlined />{" "}
          </p>
        </div>
      ))}

      {/* paymant  */}

      <p className=" text-sm text-[#6E6E6F] px-3 mt-5">
        {" "}
        With 10% Discount of Coupon Code!
      </p>
      <div className=" w-full flex gap-3 mt-3 px-3 ">
        <input
          type="text"
          placeholder=" Place your coupon code "
          className=" w-2/3 p-2 rounded"
        />
        <button className=" w-1/3  p-2 bg-[#5B52A3]  text-white rounded">
          {" "}
          Submit
        </button>
      </div>

      <p className=" flex justify-between px-3 mt-7">
        <span className=" text-xl font-medium  text-[#555656] ">
          {" "}
          Subtotal Amount{" "}
        </span>
        <span className=" text-xl font-medium text-[#555656]"> $545.00 </span>
      </p>

      <p className=" flex justify-between px-3 mt-4 mb-3">
        <span className=" text-xl font-medium  text-[#555656] ">
          {" "}
          Delivery Fee{" "}
        </span>
        <span className=" text-xl font-medium text-[#555656]"> $55.00 </span>
      </p>
      <p className="border-b border-[#DCDDDE] ps-3 "></p>

      <p className=" flex justify-between px-3 mt-2">
        <span className=" text-xl font-medium  text-[#555656] ">
          {" "}
          Total Amount{" "}
        </span>
        <span className=" text-xl font-medium text-[#555656]"> $600.00 </span>
      </p>
      <p className="text-sm text-[#6E6E6F] px-3 mt-3 ">
        You will earn 160 Points
      </p>

      <div className="  text-center my-6 ">
        <button className=" bg-[#7CC84E] text-white w-1/2  p-2 rounded ">
          {" "}
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Summary;
