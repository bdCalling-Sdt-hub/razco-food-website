import AddCarts from "@/Components/AddCart/AddCarts";
import Summary from "@/Components/AddCart/Summary";
import React from "react";

const page = () => {
  return (
    <div className="container mb-5 mt-5">
      <div className=" grid grid-cols-12 gap-6 lg:gap-10">
        <div className="col-span-12 md:col-span-6 order-2 lg:order-1">
          <AddCarts />
        </div>
        <div className="col-span-12 md:col-span-6 order-1 lg:order-1">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default page;
