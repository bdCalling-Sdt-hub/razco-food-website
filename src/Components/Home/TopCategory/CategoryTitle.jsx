import Title from "@/Components/Share/Title";
import React from "react";

const CategoryTitle = () => {
  return (
    <div className="lg:ms-[270px] lg:me-[250px] mt-20 ">
      <div className="flex  justify-between  border-b-2  border-[#EDEDED]  ">
        <Title className="border-b-2 border-[#7CC84E]">Top Categories</Title>
        <p className="text-lg font-semibold text-[#666666] "> View All </p>
      </div>
    </div>
  );
};

export default CategoryTitle;
