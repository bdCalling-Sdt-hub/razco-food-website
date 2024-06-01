import React from "react";
import Image from "next/image";
import { Pagination } from "antd";
import Link from "next/link";
import img2 from "@/assets/ctgry2.png";
import img3 from "@/assets/ctgry3.png";
import img4 from "@/assets/ctgry4.png";
import img5 from "@/assets/ctgry5.png";
import img6 from "@/assets/ctgry6.png";

const products = [
  {
    key: "1",
    imgURL: (
      <Image src={img5} width={240} height={25} alt=" " className="mx-auto" />
    ),
    title: "Dairy & Breakfast",
  },

  {
    key: "2",
    imgURL: (
      <Image src={img2} width={240} height={25} alt=" " className="mx-auto" />
    ),
    title: "Egg, Meat & Fish",
  },

  {
    key: "3",
    imgURL: (
      <Image src={img3} width={240} height={25} alt=" " className="mx-auto" />
    ),
    title: "Bath & Body",
  },

  {
    key: "4",
    imgURL: (
      <Image src={img4} width={240} height={25} alt=" " className="mx-auto" />
    ),
    title: "Cold drinks & Juices",
  },

  {
    key: "5",
    imgURL: (
      <Image src={img5} width={240} height={25} alt=" " className="mx-auto" />
    ),
    title: "Snacks & Munchies",
  },
  {
    key: "6",
    imgURL: (
      <Image src={img6} width={240} height={25} alt=" " className="mx-auto" />
    ),
    title: "Bath & Body",
  },
  {
    key: "7",
    imgURL: (
      <Image src={img3} width={240} height={25} alt=" " className="mx-auto" />
    ),
    title: "Cold drinks & Juices",
  },
  {
    key: "8",
    imgURL: (
      <Image src={img2} width={240} height={25} alt=" " className="mx-auto" />
    ),
    title: "Snacks & Munchies",
  },
  {
    key: "9",
    imgURL: (
      <Image src={img4} width={240} height={25} alt=" " className="mx-auto" />
    ),
    title: "Dairy & Breakfast",
  },

  {
    key: "10",
    imgURL: (
      <Image src={img5} width={240} height={25} alt=" " className="mx-auto" />
    ),
    title: "Egg, Meat & Fish",
  },
];

const Categories = () => {
  return (
    <div className="container my-20 ">
      <h1 className=" text-[#7CC84E] underline underline-offset-8 text-xl md:text-2xl font-semibold ">
        {" "}
        Category
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-6  mt-12 font-[poppins]">
        {products.map((product) => (
          <Link key={product.key} href={"/productDetails"}>
            <div className=" mx-auto font-[poppins]">
              <p> {product.imgURL}</p>
              <h4 className=" text-center text-lg  mt-2 ">{product.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
