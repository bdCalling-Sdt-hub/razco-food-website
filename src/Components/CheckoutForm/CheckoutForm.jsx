import React, { useState } from 'react';
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { logEvent, Result, ErrorResult } from './Utils';
import { useDispatch } from 'react-redux';
import { makeOrder } from '@/redux/apiSlice/Order/makeOrderSlice';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation'

const ELEMENT_OPTIONS = {
    style: {
        base: {
            fontSize: '18px',
            color: '#424770',
            letterSpacing: '0.025em',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#9e2146',
        },
    },
};

const CheckoutForm = ({ intent, cart }) => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const dispatch = useDispatch();

    const router = useRouter();
    
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const target = e.target;
        if (!stripe || !elements || !intent) {
            return;
        }

        const cardElement = elements.getElement(CardNumberElement);
        if (!cardElement) {
            return;
        }

        const payload = await stripe.confirmCardPayment(intent, {
            payment_method: {card: cardElement}

        });
        const data = {
            ...cart,
            transactionId: payload?.paymentIntent?.id
        }

        if (payload.error) {
            console.log('[error]', payload.error);
            setErrorMessage(payload.error.message || null);
            setPaymentMethod(null);
        } else {
            
            console.log('[PaymentMethod]', payload);
            setErrorMessage(null);
            dispatch(makeOrder(data)).then((response)=>{
                if(response?.type === "makeOrder/fulfilled" ){
                    toast.success("Order Replaced Successfully")
                    localStorage.removeItem("cartData")
                    router.push("/")
                }
            })
        }
    };

    return (
        <div className='pb-20'>
            <form onSubmit={handleSubmit} className='w-full grid grid-cols-1 gap-4'>
                <div className='w-full'>
                    <label className=' block' htmlFor="name">Cardholder Name</label>
                    <input
                        className='outline-none p-1'
                        style={{
                            width: "100%",
                            borderBottom: "1px solid #9494943D",
                        }}
                        required
                        placeholder=""
                        name='name'
                    />
                </div>

                <div>
                    <label htmlFor="cardNumber">Card Number</label>
                    <CardNumberElement
                        className='outline-none p-1 border-b-[1px] border-[#9494943D] '
                        id="cardNumber"
                        onBlur={logEvent('blur')}
                        onChange={logEvent('change')}
                        onFocus={logEvent('focus')}
                        onReady={logEvent('ready')}
                        options={ELEMENT_OPTIONS}
                    />
                </div>
                
                <div className='grid grid-cols-12 mt-3 gap-6'>
                    <div className='w-full col-span-12  md:col-span-6'>
                        <label htmlFor="expiry">Card Expiration</label>
                        <CardExpiryElement
                            className='outline-none p-1 border-b-[1px] border-[#9494943D]'
                            id="expiry"
                            onBlur={logEvent('blur')}
                            onChange={logEvent('change')}
                            onFocus={logEvent('focus')}
                            onReady={logEvent('ready')}
                            options={ELEMENT_OPTIONS}
                        />
                    </div>
                    <div className='w-full col-span-12  md:col-span-6 order-1'>
                            <label htmlFor="cvc">CVC</label>
                            <CardCvcElement
                                className='outline-none p-1 border-b-[1px] border-[#9494943D]'
                                id="cvc"
                                onBlur={logEvent('blur')}
                                onChange={logEvent('change')}
                                onFocus={logEvent('focus')}
                                onReady={logEvent('ready')}
                                options={ELEMENT_OPTIONS}
                            />
                    </div>

                    {/* <div className='w-full col-span-4 border border-red-400'>
                        <label htmlFor="postal">Postal Code</label>
                        <input
                            className='outline-none border-b-[1px] border-[#9494943D] w-full'
                            id="postal"
                            required
                            placeholder="12345"
                            value={postal}
                            onChange={(event) => setPostal(event.target.value)}
                        />
                    </div> */}
                </div>


                {errorMessage && <ErrorResult><p className='text-red-500'>{errorMessage}</p></ErrorResult>}
                {paymentMethod && (
                    <Result>Got PaymentMethod: {paymentMethod.id}</Result>
                )}
                <button className='w-full block text-white bg-[#3C3C3C] mt-6 py-3' type="submit" disabled={!stripe}>
                    Confirm Pay
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
