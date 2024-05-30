import React from "react";

const SuccessfulMsg = () => {
  return (
    <div>
      <div className="text-center  mt-14">
        <h1 className=" mt-8 mb-6 text-2xl font-semibold text-[#6E6E6F]">
          Successfully
        </h1>
        <p className="text-[#929394]">
          Your password has been updated, please change your password regularly
          to avoid this happening
        </p>
      </div>
      <button className="bg-[#7CC84E] h-12 text-white text-lg w-full   rounded-lg  mt-12 ">
        Continue
      </button>
    </div>
  );
};

export default SuccessfulMsg;
