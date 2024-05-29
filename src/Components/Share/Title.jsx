import React from "react";

const Title = ({ children, className }) => {
  return (
    <div className={`text-2xl text-[#666666] ${className}   font-semibold `}>
      {" "}
      Shop From <span className="text-[#7CC84E]"> {children} </span>{" "}
    </div>
  );
};

export default Title;
