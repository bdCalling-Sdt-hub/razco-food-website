import React from "react";
import img1 from "@/assets/fruit1.png";
import img2 from "@/assets/fruit2.png";
import img3 from "@/assets/offer.png";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Image from "next/image";
const products = [
  {
    key: 1,
    img: <Image src={img1} height={80} width={120} alt=" " />,
    title: " Tamato",
    price: "$12",
    weight: "500gm",
  },
  {
    key: 2,
    img: <Image src={img2} height={80} width={120} alt=" " />,
    title: " Orange",
    price: "$15",
    weight: "500gm",
  },
  {
    key: 3,
    img: <Image src={img3} height={80} width={120} alt=" " />,
    title: " Apple",
    price: "$18",
    weight: "500gm",
  },
  {
    key: 4,
    img: <Image src={img1} height={80} width={120} alt=" " />,
    title: " Tamato",
    price: "$12",
    weight: "500gm",
  },
  {
    key: 5,
    img: <Image src={img2} height={80} width={120} alt=" " />,
    title: " Orange",
    price: "$15",
    weight: "500gm",
  },
  {
    key: 6,
    img: <Image src={img3} height={80} width={120}alt=" " />,
    title: " Apple",
    price: "$18",
    weight: "500gm",
  },
];
const AddCarts = () => {
  return (
    <div>
      {products.map((product) => (
        <div
          key={product.key}
          className=" flex items-center justify-between p-3 bg-[#F8F8FC] mb-4 rounded"
        >
          <p> {product.img}</p>
          <div>
            <h3 className="text-[#555656] text-xl font-medium">
              {" "}
              {product.title}
            </h3>
            <p className=" text-sm text-[#929394]"> {product.weight}</p>

            <div className=" flex gap-3   mt-2  mb-3  ">
              <button className=" w-8 h-8  bg-[#e4e6e9] rounded  text-center">
                {" "}
                <MinusOutlined />{" "}
              </button>

              <button className=" w-8 h-8  bg-[#e4e6e9] rounded  text-center">
                {" "}
                1{" "}
              </button>

              <button className=" w-8 h-8  bg-[#e4e6e9] rounded  text-center">
                {" "}
                <PlusOutlined />{" "}
              </button>
            </div>
          </div>
          <p className=" text-[#70B446] text-2xl font-semibold">
            {" "}
            {product.price}
          </p>
          <p className=" text-red-600 text-xl">
            {" "}
            <DeleteOutlined />{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AddCarts;
