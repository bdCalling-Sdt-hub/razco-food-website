import TopCategory from "@/Components/Home/TopCategory/TopCategory";
import Imagebar from "@/Components/ProductDetails/Imagebar/Imagebar";
import SideDetails from "@/Components/ProductDetails/SideDetails/SideDetails";

const page = () => {
  return (
    <div className="mb-10">
      <div className=" lg:mt-16 lg:ps-[270px] lg:pe-[270px] ">
        <div className="grid lg:grid-cols-2 grid-cols-1 ">
          <div className=" grid-cols-6">
            <Imagebar />
          </div>

          <div className="grid-cols-6  lg:ms-16 ">
            <SideDetails />
          </div>
        </div>

        <div className="flex  justify-between   lg:mt-12 ">
          <h1 className=" font-semibold text-3xl  text-[#5D963B]">
            More Fruits
          </h1>
          <p className="text-lg font-semibold text-[#666666] "> View All </p>
        </div>
      </div>

      <TopCategory />
    </div>
  );
};

export default page;
