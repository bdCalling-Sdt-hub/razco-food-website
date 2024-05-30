import AddCarts from "@/Components/AddCart/AddCarts";
import Summary from "@/Components/AddCart/Summary";
import React from "react";

const page = () => {
  return (
    <div className="container mb-5 mt-5">
      <div className=" grid lg:grid-cols-2 grid-cols-1  lg:gap-10">
        <div className=" grid-cols-6">
          <AddCarts />
        </div>
        <div className="grid-cols-6">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default page;
