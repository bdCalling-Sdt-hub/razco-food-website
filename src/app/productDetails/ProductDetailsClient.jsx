"use client"
import Imagebar from "@/Components/ProductDetails/Imagebar/Imagebar";
import RelatedProduct from "@/Components/ProductDetails/RelatedProduct";
import SideDetails from "@/Components/ProductDetails/SideDetails/SideDetails";
import { getSingleProduct } from "@/redux/apiSlice/Product/getSingleProductSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetailsClient = ({id}) => {
    const { product, loading } = useSelector(state=> state.getProduct);
    const [images, setImages] = useState([]);
    const dispatch = useDispatch();


    useEffect(()=>{
        if(product?.productImage){
            setImages([...product?.productImage])
        }
    }, [product])

    useEffect(()=>{
        dispatch(getSingleProduct(id))
    }, [dispatch, id]);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="mb-16 mt-10 container">
            <div className="mb-10">
                <div className="grid lg:grid-cols-2 grid-cols-1 ">
                    <div className=" grid-cols-6">
                        <Imagebar imageList={images} />
                    </div>

                    <div className="grid-cols-6  lg:ms-16 ">
                        <SideDetails product={product} />
                    </div>
                </div>
            </div>

            <RelatedProduct id={id} />
        </div>
    );
};

export default ProductDetailsClient;
