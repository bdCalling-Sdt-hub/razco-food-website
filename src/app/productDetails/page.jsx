import TopCategory from "@/Components/Home/TopCategory/TopCategory";
import Imagebar from "@/Components/ProductDetails/Imagebar/Imagebar";
import SideDetails from "@/Components/ProductDetails/SideDetails/SideDetails";

const page = () => {
  return (
    <div className="mb-16 mt-10 container">
      <div className="mb-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 ">
          <div className=" grid-cols-6">
            <Imagebar />
          </div>

          <div className="grid-cols-6  lg:ms-16 ">
            <SideDetails />
          </div>
        </div>
      </div>

      <TopCategory />
    </div>
  );
};

export default page;
