"use client"
import React, { useEffect, useState } from "react";
import debitCard from "@/assets/debitCard.png";
import Image from "next/image";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/Components/CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentIntent } from "@/redux/apiSlice/Order/makePaymentIntentSlice";
import { useDispatch, useSelector } from "react-redux";

const PaymentClient = () => {
    const stripePromise = loadStripe('pk_test_51O7k8JEuwhYa3jTA8dapilI59hyJP9dADOXteQQVZymofTkIL9ilWjpn6MHoMwIajCOlU0zbz1I85emOAWKFcXBi00d1GVGfiF');
    const { intent } = useSelector(state => state.makePayment);
    const [cart, setCart] = useState(null);
    const [price, setPrice] = useState()
    const dispatch = useDispatch();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCart = JSON.parse(localStorage.getItem("cartData"));
            setCart(storedCart);
            if (storedCart) {
                setPrice(storedCart.deliveryFee + storedCart.price);
            }
        }
    }, []);

    
    
    useEffect(() => {
        if(price){
            dispatch(makePaymentIntent( price ))
        }
    }, [dispatch, price]);


    return (
        <div className="container lg:mt-20 mt-5">
            <div className="  ">
                <Image
                    src={debitCard}
                    width={300}
                    height={180}
                    alt=""
                    className="mx-auto lg:mb-14  mb-4 "
                />
                <Elements stripe={stripePromise}>
                    <CheckoutForm cart={cart} intent={intent?.client_secret} />
                </Elements>
            </div>
        </div>
    )
}

export default PaymentClient