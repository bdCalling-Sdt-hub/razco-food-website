import Imagebar from "@/Components/ProductDetails/Imagebar/Imagebar";
import RelatedProduct from "@/Components/ProductDetails/RelatedProduct";
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

      <RelatedProduct />
    </div>
  );
};

export default page;
