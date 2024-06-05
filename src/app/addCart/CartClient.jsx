import AddCarts from "@/Components/AddCart/AddCarts";
import Summary from "@/Components/AddCart/Summary";
import React, { useEffect } from "react";
import { getCart } from "@/redux/apiSlice/getCartSlice"
import { useDispatch, useSelector } from "react-redux";

const CartClient = () => {
    const dispatch = useDispatch()
    const { carts } = useSelector(state=> state.getCart);

    useEffect(()=>{
        dispatch(getCart())
    }, [dispatch])
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

export default CartClient;
