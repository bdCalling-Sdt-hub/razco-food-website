import Imagebar from "@/Components/ProductDetails/Imagebar/Imagebar";
import RelatedProduct from "@/Components/ProductDetails/RelatedProduct";
import SideDetails from "@/Components/ProductDetails/SideDetails/SideDetails";
import React from "react";
import ProductDetailsClient from "../ProductDetailsClient";
// import { useRouter } from "next/router";

const page = ({ params: { productId } }) => {
  
  return (
    <React.Fragment>
      <ProductDetailsClient id={productId} />
    </React.Fragment>
  );
};

export default page;
