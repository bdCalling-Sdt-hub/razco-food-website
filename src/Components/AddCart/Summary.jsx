import React from "react";
import Link from "next/link";


const Summary = ({ filterProducts ,total}) => {
  return (
    <div className=" bg-[#F8F8FC] p-4 ">
      <h4 className=" text-[#555656]  text-lg  font-semibold"> Summary </h4>


      {
        filterProducts?.map((product) => (
          <div
            key={product.key}
            className=" flex items-center justify-between px-4 border-b-2 py-2"
          >
            <p className="w-14 h-14"> {product.img}</p>
            <div>
              <p className="text-[#555656] text-lg font-medium ">
                {" "}
                {product.title}{" "}
              </p>
              <p className="text-[#524A93]">Price {product.price} * {product.quantity} Quantity</p>
            </div>
            <p className="text-[#70B446] text-2xl font-semibold">
              $ {product.price * product.quantity} 
            </p>


    


          </div>
        ))
      }

      {/* paymant  */}

      <p className=" text-sm text-[#6E6E6F] px-3 mt-5">
        {" "}
        With 10% Discount of Coupon Code!
      </p>
      <div className=" w-full flex gap-3 mt-3 px-3 ">
        <input
          type="text"
          placeholder=" Place your coupon code "
          className=" w-2/3 p-2 rounded"
        />
        <button className=" w-1/3  p-2 bg-[#5B52A3]  text-white rounded">
          {" "}
          Submit
        </button>
      </div>

      <p className=" flex justify-between px-3 mt-7">
        <span className=" text-xl font-medium  text-[#555656] ">
          {" "}
          Subtotal Amount{" "}
        </span>
        <span className=" text-xl font-medium text-[#555656]"> ${total}</span>
      </p>

      <p className=" flex justify-between px-3 mt-4 mb-3">
        <span className=" text-xl font-medium  text-[#555656] ">
          {" "}
          Delivery Fee{" "}
        </span>
        <span className=" text-xl font-medium text-[#555656]"> $55.00 </span>
      </p>
      <p className="border-b border-[#DCDDDE] ps-3 "></p>

      <p className=" flex justify-between px-3 mt-2">
        <span className=" text-xl font-medium  text-[#555656] ">
          {" "}
          Total Amount{" "}
        </span>
        <span className=" text-xl font-medium text-[#555656]"> $ {total + 55}</span>
      </p>
      <p className="text-sm text-[#6E6E6F] px-3 mt-3 ">
        You will earn 160 Points
      </p>

      <div className="  text-center my-6 ">
        <Link href="/paymentDetails">
          <button className=" bg-[#7CC84E] text-white w-1/2  p-2 rounded ">
            {" "}
            Check Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Summary;
