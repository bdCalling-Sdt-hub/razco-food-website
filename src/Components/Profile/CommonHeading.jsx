import React from "react";

const CommonHeading = ({ title }) => {
  return (
    <h1 className="lg:text-[24px] sm:text-[20px] leading-9 text-[#5B52A3] font-semibold">
      {title}
    </h1>
  );
};

export default CommonHeading;
