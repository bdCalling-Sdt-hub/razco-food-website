import React from "react";
import phone from "@/assets/phone.png";
import mail from "@/assets/mail.png";
import location from "@/assets/location.png";
import Image from "next/image";

const page = () => {
  return (
    <div className="lg:mt-28 lg:ps-[270px] lg:pe-[270px] mt-10  lg:h-[30vh]">
      <div className=" grid lg:grid-cols-3 grid-cols-1 justify-items-center">
        <div className=" border-e-2  pe-16  border-[#7e7c7c]">
          <div className=" flex items-center gap-2 ">
            {" "}
            <Image src={phone} height={14} width={38} alt="" />{" "}
            <span className=" text-2xl font-medium text-[#575757] ">
              Call To Us
            </span>
          </div>
          <p className=" text-lg text-[#575757] py-4"> Phone: +9999999999 </p>
          <p className=" text-lg text-[#575757] pb-4">Phone: +9999999999 </p>
        </div>

        <div className=" border-e-2  pe-16  border-[#7e7c7c]">
          <div className=" flex items-center gap-2 ">
            {" "}
            <Image src={mail} height={14} width={38} alt="" />{" "}
            <span className=" text-2xl font-medium text-[#575757] ">
              Write To Us
            </span>
          </div>
          <p className=" text-lg text-[#575757] py-4">
            {" "}
            Emails: xxxxxxx@gmail.com{" "}
          </p>
          <p className=" text-lg text-[#575757] pb-4">
            Emails: xxxxxxx@gmail.com{" "}
          </p>
          <p className=" text-lg text-[#575757] pb-4">
            Emails: xxxxxxx@gmail.com{" "}
          </p>
        </div>

        <div className="">
          <div className=" flex items-center gap-2 ">
            {" "}
            <Image src={location} height={14} width={38} alt="" />{" "}
            <span className=" text-2xl font-medium text-[#575757] ">
              Visit Our Location
            </span>
          </div>
          <p className=" text-lg text-[#575757] py-4">
            Head Office : AAA/7 ,Area R/A
          </p>
          <p className=" text-lg text-[#575757] pb-4">
            Branch 1 : 23/A , Area, City{" "}
          </p>
          <p className=" text-lg text-[#575757] pb-4">
            Branch 1 : 23/A , Area, City{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
