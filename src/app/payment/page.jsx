"use client";
import React from "react";
import debitCard from "@/assets/debitCard.png";
import Image from "next/image";
import PaymentForm from "@/Components/Payment/PaymentForm/PaymentForm";
const page = () => {
  return (
    <div className="container lg:mt-20 mt-5">
      <div className="  ">
        <Image
          src={debitCard}
          width={500}
          height={300}
          alt=""
          className="mx-auto lg:mb-14  mb-4 "
        />
        <PaymentForm />
      </div>
    </div>
  );
};

export default page;
